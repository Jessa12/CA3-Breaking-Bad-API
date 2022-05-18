import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.page.html',
  styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {

  death: Observable<any>;
  deathId: Observable<any>;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
      this.death = this.api.getDeaths();
      this.death.subscribe(data => {
      console.log('my deaths: ', data);
    });
  }

  openDetails(character){
      let deathId = this.deathId;
      this.router.navigateByUrl(`/tabs/deaths/${deathId}`);
  }
}