import { Component } from "@angular/core";
import { Http } from "@angular/http";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import "rxjs/add/operator/map";
declare var io: any;

@IonicPage()
@Component({
  selector: "page-auctions",
  templateUrl: "auctions.html"
})
export class AuctionsPage {
  ships = [];
  loading = true;
  offset = 0;
  show = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http
  ) {
    console.log("auction con");
    this.request(true)
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AuctionsPage");
  }

  request(initial?, event?) {
    // io.socket.get("/api/auction", event => {
    //   console.log(event)
    //   let result = []
    //   event.auctions.forEach(record => {
    //     record.stats["price"] = record.currentPrice
    //     result.push(record.stats)
    //   })
    //   this.ships = result
    //   this.loading = false
    // })
    const request = this.http.get("/api/v1/shipsRandom?offset=" + (3759 + this.offset * 12)).map(res => res.json())
    request.subscribe(data => {
          this.loading = false;
    
          if (data) {
            if (data.length > 0) {
              data.sort((a, b) => {
                return a.id - b.id;
              });
              console.log(data, this.ships)
              this.ships = [...this.ships, ...data];
              if (initial) {
                setTimeout(() => {
                  this.show = true;
                }, 150);
              }
              this.loading = false;
            }
          } else {
            console.log("unable to load ships");
          }
          if (event) {
            event.complete();
          }
        })
  }

  changeTab(e) {
    this.offset ++;
    this.loading = true;
    this.request(false, e)
  }

  parseResult(data) {
    this.loading = false;
    console.log(data);
    if (data.length > 0) {
      this.ships = data;
    }
  }
}
