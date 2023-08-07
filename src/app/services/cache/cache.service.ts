import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  handleCache(cacheName: string, cacheUrl:string){
    if ('serviceWorker' in navigator && 'caches' in window) {
      this.checkInCache(cacheName, cacheUrl).then((isCached) => {
        if (!isCached) {
          this.saveGlb(cacheName, cacheUrl);
        }
      });
    }
  }

  saveGlb(name: string, url: string) {
    return caches.open(name).then((cache) => {
      return cache.add(url);
    })
  }

  checkInCache(name: string, url: string) {
    return caches.open(name).then((cache) => {
      return cache.match(url).then((match) => match ? true : false);
    })
  }
}
