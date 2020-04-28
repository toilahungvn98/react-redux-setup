import {
  v4 as uuidv4
} from 'uuid';
export const DUMB_DATA = [{
    id: 1,
    name: 'GTA 5',
    images: [
      'https://steamcdn-a.akamaihd.net/steam/apps/271590/header.jpg',
      'https://steamcdn-a.akamaihd.net/steam/apps/271590/ss_32aa18ab3175e3002217862dd5917646d298ab6b.600x338.jpg?t=1539304955',
      'https://steamcdn-a.akamaihd.net/steam/apps/271590/ss_2744f112fa060320d191a50e8b3a92441a648a56.600x338.jpg?t=1539304955',
      'https://steamcdn-a.akamaihd.net/steam/apps/271590/ss_da39c16db175f6973770bae6b91d411251763152.600x338.jpg?t=1539304955',
      'https://steamcdn-a.akamaihd.net/steam/apps/271590/ss_66daaa8e0416b805ffb9a853235e21468d6b85bc.600x338.jpg?t=1539304955'
    ],
    price: 500000,
    status: true,
    bestsell: true,
    inventory: 200,
    genre: ['Action', 'Adventure', 'roleplay'],
    description: 'Grand Theft Auto V (còn được gọi là Grand Theft Auto 5, GTA 5  hoặc GTA V) là trò chơi video được phát triển bởi Rockstar North thuộc hãng Rockstar Games. Là phiên bản thứ năm trong Dòng trò chơi Grand Theft Auto  và là phần kế tiếp của Grand Theft Auto IV . Bản gốc của trò chơi chính thức được phát hành vào ngày 17 Tháng 9 năm 2013 cho phiên bản Xbox 360 và PlayStation 3. Trò chơi cũng đã được phát hành cho phiên bản Xbox One và PlayStation 4  vào ngày 18 tháng 11 năm 2014, sau đó phát hành cho PC vào ngày 14 tháng 4 năm 2015.',


  },
  {
    id: 2,
    name: 'Survival evolved',
    images: [
      'https://steamcdn-a.akamaihd.net/steam/apps/346110/header.jpg',
      'https://steamcdn-a.akamaihd.net/steam/apps/346110/ss_2fd997a2f7151cb2187043a1f41589cc6a9ebf3a.600x338.jpg?t=1529427276',
      'https://steamcdn-a.akamaihd.net/steam/apps/346110/ss_01cbef83fe28d64ee5a3d39a86043fb1e49abd31.600x338.jpg?t=1529427276',
      'https://steamcdn-a.akamaihd.net/steam/apps/346110/ss_ffe9f0e2e23892f3bb6188e5a3eed0f60a08baf4.600x338.jpg?t=1529427276',
      'https://steamcdn-a.akamaihd.net/steam/apps/346110/ss_ffd48da603fa700d10738ae4ee44ce2b9113cb64.600x338.jpg?t=1529427276'
    ],
    price: 400000,
    status: true,
    bestsell: true,
    inventory: 300,
    genre: ['Action', 'Adventure', ' Massively Multiplayer', 'RPG',
      'Early Access'
    ],
    description: 'ARK: Survival Evolved là tựa game sinh tồn lấy đề tài về thời kỳ khủng long. Khỏi phải nói về độ chân thực và hoàn mỹ của ARK: Survival Evolved, nó quá đẹp, đẹp đến nỗi xóa nhòa đi ranh giới giữa game và đời thực. Được đánh giá là một trong những tựa game sinh tồn hàng đầu trên thế giới hiện nay, ARK có thể giúp bạn có những giờ phút giải trí tuyệt vời nhất.'

  },
  {
    id: 3,
    name: 'PUBG',
    images: [
      'https://awqu8whgvy.vcdn.com.vn/image/cache/catalog/Anh-SP-New/PUBG-ratbt-457x213.png',
      'https://steamcdn-a.akamaihd.net/steam/apps/578080/ss_2c79b3b590b186b10bf082d37674621f204a3497.600x338.jpg?t=1545084399',
      'https://steamcdn-a.akamaihd.net/steam/apps/578080/ss_108e2981889423b057b778cd07ae25ac18406cf1.600x338.jpg?t=1545084399',
      'https://steamcdn-a.akamaihd.net/steam/apps/578080/ss_8112cd376568d9470c2edde841908fcdf46f1529.600x338.jpg?t=1545084399',
      'https://steamcdn-a.akamaihd.net/steam/apps/578080/ss_c4ac13f9030cc049353605840302f9090ee73106.600x338.jpg?t=1545084399'
    ],
    price: 180000,
    status: true,
    bestsell: true,
    inventory: 400,
    genre: ['Action', 'Adventure', ' Massively Multiplayer', 'Early Access'],
    description: `Cơ chế chiến đấu của PlayerUnknown's Battlegrounds cũng tương tự như hầu hết các tựa game bắn súng góc khác. Tuy nhiên, điểm khác biệt nằm ở quy mô rộng lớn của map. Trong PlayerUnknown's Battlegrounds, bạn sẽ được trải nghiệm một thế giới mở để bạn thỏa sức khám phá. Có rất nhiều thứ bạn có thể tương tác được trong game.`

  },
  {
    id: uuidv4(),
    name: 'Left 4 Dead 2',
    images: [
      'https://steamcdn-a.akamaihd.net/steam/apps/550/header.jpg',
      'https://steamcdn-a.akamaihd.net/steam/apps/550/ss_2eae29fbdfe8e5e8999b96d8bb28c5db70507968.600x338.jpg?t=1540300687',
      'https://steamcdn-a.akamaihd.net/steam/apps/550/ss_ba2ea2eda245f89626277457ae2ab76ba997f46a.600x338.jpg?t=1540300687',
      'https://steamcdn-a.akamaihd.net/steam/apps/550/ss_9488e329bb42d792a059fb44cb7135d25b6262f5.600x338.jpg?t=1540300687',
      'https://steamcdn-a.akamaihd.net/steam/apps/550/ss_a9c1227ffe8a1968e234b3ebda08e773fc619e37.600x338.jpg?t=1540300687'
    ],
    price: 119000,
    status: true,
    inventory: 200,
    genre: ['Action'],
    description: `Trong Left 4 Dead 2, người chơi sẽ phải điều khiển một trong 4 người sống sót (Survivors) chiến đấu chống lại những người bị lây nhiễm (Infected) nhằm tìm đến những khu vực cứu hộ (Safe House) và cuối cùng là một trong những phương tiện di chuyển (máy bay trực thăng, tàu, ô tô...) để đào thoát khỏi vùng bị dịch bệnh. Trò chơi có 4 chế độ chơi chính: chế độ chơi đơn (Single) trong đó người chơi sẽ điều khiển một Survivors, các Survivors còn lại sẽ do AI điều khiển; chế độ chiến dịch (Campaign) 4 người chơi; chế độ đối kháng 8 người chơi (Versus) trong đó lần lượt 4 người điều khiển Survivors và 4 người điều khiển Infected; chế độ sinh tồn (Survival) trong đó 4 người chơi sẽ chống lại các đợt tấn công liên tiếp của Infected cho đến khi tất cả bị tiêu diệt.`

  },
  {
    id: uuidv4(),
    name: 'Rust',
    images: [
      'https://steamcdn-a.akamaihd.net/steam/apps/252490/header.jpg',
      'https://steamcdn-a.akamaihd.net/steam/apps/252490/ss_1d6dd798ec9ebe3b6da69483bfcdd19e7300971c.600x338.jpg?t=1538647482',
      'https://steamcdn-a.akamaihd.net/steam/apps/252490/ss_4f2d0e89f55bcf236bb64c72736104c44aa50275.600x338.jpg?t=1538647482',
      'https://steamcdn-a.akamaihd.net/steam/apps/252490/ss_78821c1215b0ed8227fda7a0779491958ba985ef.600x338.jpg?t=1538647482',
      'https://steamcdn-a.akamaihd.net/steam/apps/252490/ss_436276430fef4ff9afdf4840ad9fd39c45860fa1.600x338.jpg?t=1538647482'
    ],
    price: 308000,
    status: true,
    bestsell: true,
    inventory: 250,
    genre: ['Action', 'Adventure', 'Massively Multiplayer', 'RPG'],
    description: `Rust là một game thể loại sinh tồn được tạo bởi Facepunch Studios. Lấy cảm hứng từ trò chơi như Dayz, Minecraft và Stalker. Rust hướng tới một môi trường khắc nghiệt, nơi mà người chơi phải đấu tranh để sống sót từng ngày trong đó.`

  },
  {
    id: uuidv4(),
    name: 'Dead by daylight',
    images: [
      'https://steamcdn-a.akamaihd.net/steam/apps/381210/header.jpg',
      'https://steamcdn-a.akamaihd.net/steam/apps/381210/ss_5d66c65ae32b7dd265c5eccf0f38ae3e21f54351.600x338.jpg?t=1540312210',
      'https://steamcdn-a.akamaihd.net/steam/apps/381210/ss_8c5b75a9ee6c69f18eec714759e3e7b84aa906ed.600x338.jpg?t=1540312210',
      'https://steamcdn-a.akamaihd.net/steam/apps/381210/ss_002a2dcb76e82db9878fcc8416daa279098426a4.600x338.jpg?t=1540312210',
      'https://steamcdn-a.akamaihd.net/steam/apps/381210/ss_9566e860ebefe1f8c5a3147818e2447ae906f6da.600x338.jpg?t=1540312210'
    ],
    price: 74000,
    status: true,
    inventory: 150,
    genre: ['Action'],
    description: `Dead by Daylight là 1 game nhiều người chơi (1 vs 4). 1 tựa game horror survivor , Dead by Daylight đem lại cho bạn những cảm giác như trong những phim kinh dị mỹ đình đám 1 thời.Với mỗi lần tiếng tim đập,hoặc tiếng âm nhạc dồn dập là 1 lần bạn thót tim và chạy không quay đầu lại.`

  },
  {
    id: uuidv4(),
    name: 'Farm Together',
    images: [
      'https://steamcdn-a.akamaihd.net/steam/apps/673950/header.jpg',
      'http://cdn.akamai.steamstatic.com/steam/apps/673950/ss_d946dc4ac9258fb3f35b9f3653544cfda37a92f0.jpg',
      'http://cdn.akamai.steamstatic.com/steam/apps/673950/ss_16c242ae53fea95494477ce2e03498eeccddb83f.jpg',
      'http://cdn.akamai.steamstatic.com/steam/apps/673950/ss_6657995574c50e972fce2a721f56e91e20875ad2.jpg',
      'http://cdn.akamai.steamstatic.com/steam/apps/673950/ss_a2097fab6693e4fbbced4ca8cd960ef54014dc90.jpg'
    ],
    price: 187000,
    status: true,
    inventory: 150,
    genre: ['Casual', 'Simulation'],
    description: `Farm Together là game nông trại trên nền đồ họa 3D do Milkstone Studios phát hành. mang đến cho người chơi cuộc sống bình dị, mộc mạc nơi đồng quê và những trải nghiệm phong phú trong xây dựng và quản lý trang trại của chính mình.`

  },
  {
    id: uuidv4(),
    name: "Garry's Mod",
    images: [
      'https://steamcdn-a.akamaihd.net/steam/apps/4000/header.jpg',
      'https://steamcdn-a.akamaihd.net/steam/apps/4000/ss_4162b10390d84aa600e5ed895fdc885482eb2e71.600x338.jpg?t=1535986052',
      'https://steamcdn-a.akamaihd.net/steam/apps/4000/ss_ff27d52a103d1685e4981673c4f700b860cb23de.600x338.jpg?t=1535986052',
      'https://steamcdn-a.akamaihd.net/steam/apps/4000/ss_c13ffded1d71bedfa7ede94c11cbd21fbd21a32c.600x338.jpg?t=1535986052',
      'https://steamcdn-a.akamaihd.net/steam/apps/4000/0000000822.600x338.jpg?t=1535986052'
    ],
    price: 119000,
    status: true,
    inventory: 150,
    genre: ['Simulation'],
    description: `Nếu bạn đã từng chơi qua Half-Life 2 và yêu thích bộ engine Source với những chiêu trò "vọc vạch" hài hước đến phì cười thì Garry's Mod chính là trò chơi bạn cần lưu tâm bởi nó cho phép người chơi tận dụng hệ thống vật lý rất đặc biệt của Source để tự tạo nên một thế giới cho riêng mình!`

  },
  {
    id: uuidv4(),
    name: "Batman™: Arkham Knight",
    images: [
      'https://steamcdn-a.akamaihd.net/steam/apps/208650/header.jpg',
      'https://steamcdn-a.akamaihd.net/steam/apps/208650/ss_90026e46a995760d53bfa2dc1612b73960c84c94.600x338.jpg?t=1496257975',
      'https://steamcdn-a.akamaihd.net/steam/apps/208650/ss_4c9d5fb849b1a7169184a37db000919b276056fe.600x338.jpg?t=1496257975',
      'https://steamcdn-a.akamaihd.net/steam/apps/208650/ss_5da3185e4f7da999300555747be6b84b8f16164f.600x338.jpg?t=1496257975',
      'https://steamcdn-a.akamaihd.net/steam/apps/208650/ss_43ac2ec5dc64f59b1816b1cc0ba5b430d36c636f.600x338.jpg?t=1496257975'
    ],
    price: 187000,
    status: true,
    inventory: 150,
    genre: ['Action', 'Adventure'],
    description: `Batman™: Arkham Knight brings the award-winning Arkham trilogy from Rocksteady Studios to its epic conclusion. Developed exclusively for New-Gen platforms, Batman: Arkham Knight introduces Rocksteady's uniquely designed version of the Batmobile. The highly anticipated addition of this legendary vehicle, combined with the acclaimed gameplay of the Arkham series, offers gamers the ultimate and complete Batman experience as they tear through the streets and soar across the skyline of the entirety of Gotham City. In this explosive finale, Batman faces the ultimate threat against the city that he is sworn to protect, as Scarecrow returns to unite the super criminals of Gotham and destroy the Batman forever.`

  },
];
