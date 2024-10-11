import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Nuova API HttpClient
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withFetch()), AppRoutingModule],
}).catch((err) => console.error(err));
