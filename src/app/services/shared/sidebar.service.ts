import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SidebarService {
  menu: any = [
    {
      title: "Principal",
      icon: "mdi mdi-gauge",
      submenu: [
        { title: "Dashboard", url: "/dashboard" },
        { title: "Progress Bar", url: "/progress" },
        { title: "Graficas", url: "/charts1" },
        { title: "Promesas", url: "/promises" },
        { title: "RxJs", url: "/rxjs" },
      ],
    },
    {
      title: "Mantenimiento",
      icon: "mdi mdi-folder-lock-open",
      submenu: [
        { title: "Usuarios", url: "/user" },
        { title: "Hospitales", url: "/hospitals" },
        { title: "Medicos", url: "/doctors" },
      ],
    },
  ];

  constructor() {}
}
