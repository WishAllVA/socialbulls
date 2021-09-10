import { Component, HostBinding } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SplashComponent } from './splash/splash.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sociallbulls';
  @HostBinding("class.drawer-open")
  isDrawerOpen: boolean = false;

  toggleDrawer(isDrawerOpen: boolean) {
    this.isDrawerOpen = isDrawerOpen;
  }

  getDummyText(): string {
    return "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum accusamus quam, iste sed nulla facilis doloribus cumque illum officia, reiciendis dolor voluptas! Nemo necessitatibus voluptatibus eum dolor excepturi natus modi atque quam veritatis quaerat. Odio itaque, sunt ea incidunt cumque blanditiis ipsa, dolor debitis laudantium provident, corrupti iusto nobis officia at non inventore et dicta. Doloribus numquam distinctio, commodi, esse porro maiores modi sapiente iste animi suscipit, dolores sit. Nihil sit adipisci eligendi fuga! Ea velit iusto quo pariatur culpa nesciunt, nam atque sed eum praesentium magnam asperiores et nostrum voluptate nobis repellat! Consequuntur, cumque? Sequi, voluptate. Quo consequuntur est vel quia ipsa reiciendis voluptas facere atque dicta ab, dolore officia dolorem quos neque quisquam. Similique, dolorem ullam? Consequuntur veniam in officia pariatur animi possimus et dolore ab consectetur at. Consequuntur, nesciunt fuga a eum culpa iure! Cum consequuntur nobis itaque velit molestiae cupiditate dicta provident corrupti saepe labore veniam error mollitia similique libero neque deleniti, maxime deserunt eligendi praesentium recusandae voluptatum id consectetur. At unde tempora sint. Eaque ullam ad magni iste provident nihil blanditiis animi consequuntur nostrum. Debitis quidem ex repellendus esse commodi sint odio nihil quos ullam ad officia corrupti totam rem molestias perferendis hic alias, excepturi dolores inventore sequi? Dolor sequi adipisci perferendis eos assumenda tempore qui atque, nam vero accusantium aperiam reprehenderit rerum ducimus inventore sit facere, officia repellendus nisi libero eaque? Deserunt libero magni quibusdam nisi itaque consequuntur magnam nobis quisquam iste, eius dolores amet at, asperiores laudantium, veniam ut beatae? Rerum nulla tempore eum quidem sequi id fugiat nesciunt veritatis commodi. Voluptatum, totam nostrum? Sapiente enim mollitia soluta voluptate repellendus quidem perspiciatis placeat explicabo eaque aliquam accusantium officiis, corporis natus assumenda dolore! At accusantium natus saepe sapiente suscipit soluta magni laborum dicta? Tenetur voluptates, illum iusto optio praesentium sed distinctio placeat provident culpa, quia vero. Repudiandae quia facilis cumque fuga eligendi repellendus error et, provident laudantium accusamus quo? Perferendis veniam iusto excepturi ducimus natus. Doloremque nostrum cum nobis esse repellendus eaque eum nihil iure mollitia temporibus dolore fugit voluptas, dolorum ipsam perferendis accusantium ullam corporis explicabo earum cumque repudiandae accusamus itaque exercitationem. Dignissimos esse accusantium, odit sapiente dolore, facere sequi praesentium id laudantium omnis natus. Placeat nihil facilis reiciendis ratione accusantium quidem veniam explicabo? Aliquam veritatis nemo alias, amet tenetur laboriosam iure quasi consequuntur doloremque minima eum commodi dolor distinctio? Nulla, dignissimos ex. Consequuntur deleniti esse quis magnam laboriosam! Illo quibusdam hic explicabo.";
  }

}
