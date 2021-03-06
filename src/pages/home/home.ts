import { Component, HostListener, ViewChild, ElementRef, NgZone } from "@angular/core"
import { NavController, Content } from "ionic-angular"
import { AppState } from "../../app/app.service"
declare let io: any


// @IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  requestedEmail
  requestedName
  status
  success
  show = false;
  ships = [{
    gene: "513066591814369436534414129629284282288144041000433645720972407182144918",
    id: 5233,
    model: 5,
    name: null,
    primaryColor: [127, 75, 165],
    primaryWeapon: "Bolt Lightning",
    secondaryColor: [147, 45, 35],
    secondaryWeapon: "Heavy Water Missile",
    size: "Small"
  }, {
    gene: "516355761923955468071438196896300763218417601148502569913636980659761516",
    id: 5234,
    model: 5,
    name: "-VIRGIN- 5234",
    primaryColor: [127, 157, 137],
    primaryWeapon: "Bolt Torpor",
    secondaryColor: [190, 47, 57],
    secondaryWeapon: "Corkscrew Missile",
    size: "Small"
  }]
  scrollTop = window.scrollY == 0;
  @ViewChild(Content) content: Content;
  @ViewChild('shipVideo', { read: ElementRef }) shipVideo: ElementRef;

  constructor(public navCtrl: NavController, public appState: AppState, private zone: NgZone) {
    // if (this.appState.account) {
    //   io.socket.get("/api/user/" + this.appState.account, res => {
    //     if (typeof res == "string") {
    //       console.log(res)
    //       this.isRegistered = false
    //     } else {
    //     }
    //   })
    // }
    console.log("home loaded")
    setTimeout(() => {
      this.show = true;
    }, 2)
  }

  ionViewDidLoad() {
    this.content.ionScroll.subscribe(($event) => { this.scrollTop = $event.scrollTop === 0 });
    const video: HTMLVideoElement = this.shipVideo.nativeElement;

    video.muted = true;
    video.play().catch((err) => {
      alert('video error ' + err);
    });
  }

  scrollTo(element) {
    document.querySelector(element).scrollIntoView({
      block: "nearest", inline: "start",
      behavior: 'smooth'
    });
  }

  register() {
    console.log("clicked register", this.appState.account)
    if (this.appState.account) {
      console.log("posting")
      io.socket.post(
        "/api/user",
        {
          username: this.requestedName,
          email: this.requestedEmail,
          address: this.appState.account
        },
        res => {
          console.log(res)
          if (!res.status) {
            this.appState.username = res.username
            this.success = true
          } else if (res.status == 400) {
            this.status = res.details
          } else {
            this.status = res.details
          }
        }
      )
    }
  }

  navigateTo(e, route) {
    e.preventDefault();
    this.zone.run(() => {
      this.appState.activePage = 'auctions'
      this.navCtrl.setRoot(route);
    })
  }

  @HostListener('scroll', ['$event'])
  onElementScroll(e) {
    console.log('scrolly is ', window.scrollY)
    this.scrollTop = window.scrollY == 0;
  }
}
