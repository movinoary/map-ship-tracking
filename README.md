# Ship Tracking and Docking WebGIS

Web pelacakan lokasi kapal di indonesia. Data lokasi kapal di ambil dari situs marinetraffic. Menggunakan mapbox sebagai base map.

![Desain](https://github.com/movinoary/map-ship-tracking/blob/master/src/assets/desain.png?raw=true)

### Clone Repository

```bash
  git clone "https://github.com/movinoary/map-ship-tracking"
```

Masuk ke directory projek

```bash
  cd map-ship-tracking
```

Instal package

```bash
  npm install
```

jalankan react

```bash
  npm run dev
```

### Package

- [react](https://react.dev/)
- [tailwind](https://tailwindcss.com/)
- [mapbox-gl](https://www.mapbox.com/)
- [react-map-gl](https://urbica.github.io/react-map-gl/)

### File

| File                    | Description                                            |
| :---------------------- | :----------------------------------------------------- |
| `index.js`              | Merender awal untuk framework reactjs                  |
| `index.css`             | Kumpulan css yang digunakan                            |
| `App.js`                | Rendering map, dan konfigurasi popup                   |
| `function.js`           | Komponent Fungsi                                       |
| `harbor.js`             | Konfigurasi data untuk tampilan pelabuhan              |
| `menu.js`               | Tampilan menu                                          |
| `ship.js`               | Konfigurasi data untuk tampilan kapal                  |
| `harbor-indonesia.json` | Kumpulan data pelabuhan yang berada di indonesia       |
| `informasi.json`        | Pengelompokan kategori kapal                           |
| `ship-1.json`           | Kumpulan data pelacakan kapal yang berada di indonesia |
| `ship-2.json`           | Kumpulan data pelacakan kapal yang berada di indonesia |
