import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { PergunteComponent } from './pergunte/pergunte.component';
import { PlanosComponent } from './planos/planos.component';
import { DownloadComponent } from './download/download.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'apresentacao', component: ApresentacaoComponent },
  { path: 'pergunte', component: PergunteComponent },
  { path: 'planos', component: PlanosComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' }
];
