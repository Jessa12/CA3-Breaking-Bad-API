import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getEpisodes() {
        return this.http.get('https://8100-jessa12-ca3breakingbada-pwpnqz17xbg.ws-eu45.gitpod.io/assets/episodes.json')
    }

    getEpisode(id) {
        return this.http.get(`https://8100-jessa12-ca3breakingbada-pwpnqz17xbg.ws-eu45.gitpod.io/assets/episode.json`);
    }

    getCharacters() {
        return this.http.get('https://8100-jessa12-ca3breakingbada-pwpnqz17xbg.ws-eu45.gitpod.io/assets/characters.json')
    }

    getCharacter(id) {
        return this.http.get(`https://8100-jessa12-ca3breakingbada-pwpnqz17xbg.ws-eu45.gitpod.io/assets/characters.json`);
    }

    getQuotes() {
        return this.http.get(`https://8100-jessa12-ca3breakingbada-pwpnqz17xbg.ws-eu45.gitpod.io/assets/quotes.json`)
    }

    getQuote(id) {
        return this.http.get(`https://8100-jessa12-ca3breakingbada-pwpnqz17xbg.ws-eu45.gitpod.io/assets/quotes.json`);
    }

    getDeaths() {
        return this.http.get(`https://8100-jessa12-ca3breakingbada-pwpnqz17xbg.ws-eu45.gitpod.io/assets/deaths.json`)
    }

}