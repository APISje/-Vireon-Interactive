export default async function handler(req, res) {
  const userAgent = req.headers['user-agent'] || "";
  
  // LINK GITHUB RAW LU SUDAH GUE PASANG DI SINI
  const GITHUB_RAW_URL = "https://raw.githubusercontent.com/AFISAJADEH/owi/refs/heads/main/apalah%20aja.lua";

  // 1. JIKA DIAKSES OLEH EXECUTOR ROBLOX
  if (userAgent.includes("Roblox")) {
    try {
      // Vercel bakal ngambil isi script lu dari GitHub secara diam-diam
      const response = await fetch(GITHUB_RAW_URL);
      const scriptContent = await response.text();

      res.setHeader('Content-Type', 'text/plain');
      return res.status(200).send(scriptContent);
    } catch (error) {
      return res.status(500).send("-- Error: Gagal koneksi ke GitHub Raw");
    }
  } 

  // 2. JIKA DIAKSES OLEH BROWSER (MANUSIA) - TAMPILAN PREMIUM VIREON
  res.setHeader('Content-Type', 'text/html');
  return res.status(200).send(`
    <!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <title>Vireon Interactive | Security Protocol</title>
        <script src="https://unpkg.com/@phosphor-icons/web"></script>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap" rel="stylesheet">
        <style>
            :root { --primary: #f0c33c; --error: #ff4d4d; --bg: #050507; --glass: rgba(15, 15, 20, 0.7); }
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { background-color: var(--bg); color: #fff; font-family: 'Plus Jakarta Sans', sans-serif; height: 100vh; display: flex; justify-content: center; align-items: center; overflow: hidden; }
            #overlay { position: fixed; inset: 0; background: var(--bg); z-index: 999; display: flex; justify-content: center; align-items: center; transition: 0.8s; }
            .enter-btn { background: none; border: 1px solid var(--primary); color: var(--primary); padding: 15px 40px; border-radius: 50px; font-weight: 800; cursor: pointer; letter-spacing: 2px; }
            .grid-bg { position: absolute; inset: 0; background-image: linear-gradient(rgba(240, 195, 60, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(240, 195, 60, 0.05) 1px, transparent 1px); background-size: 50px 50px; z-index: 1; mask-image: radial-gradient(circle, black, transparent 80%); }
            .card { position: relative; z-index: 10; width: 400px; padding: 40px; background: var(--glass); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 32px; text-align: center; transform: translateY(50px); opacity: 0; transition: 1s; }
            .card.active { transform: translateY(0); opacity: 1; }
            .btn-copy { width: 100%; padding: 16px; background: #fff; color: #000; border: none; border-radius: 16px; font-weight: 800; cursor: pointer; margin-top: 20px; }
            .features { list-style: none; text-align: left; margin: 20px 0; }
            .features li { font-size: 13px; color: #a1a1aa; padding: 10px; background: rgba(255,255,255,0.03); border-radius: 10px; margin-bottom: 8px; display: flex; align-items: center; gap: 10px; }
        </style>
    </head>
    <body>
        <div id="overlay"><button class="enter-btn" onclick="startSystem()">INITIALIZE SYSTEM</button></div>
        <div class="grid-bg"></div>
        <div class="card" id="mainCard">
            <i class="ph-bold ph-shield-warning" style="font-size: 50px; color: var(--error);"></i>
            <h1 style="margin-top:15px;">Akses Ditolak</h1>
            <span style="color:var(--primary); font-size:10px; letter-spacing:3px;">VIREON INTERACTIVE</span>
            <ul class="features">
                <li><i class="ph-bold ph-monitor-slash"></i> Restricted Environment</li>
                <li><i class="ph-bold ph-lock-keyhole"></i> Encrypted Source Code</li>
            </ul>
            <button class="btn-copy" onclick="copyAction()">Salin Script</button>
        </div>
        <audio id="bgMusic" loop><source src="https://files.catbox.moe/k3v78h.mp3" type="audio/mpeg"></audio>
        <audio id="clickMusic"><source src="/p.mp3" type="audio/mpeg"></audio>
        <script>
            function startSystem() {
                document.getElementById('overlay').style.opacity = '0';
                setTimeout(() => { 
                    document.getElementById('overlay').style.display = 'none';
                    document.getElementById('mainCard').classList.add('active');
                }, 800);
                document.getElementById("bgMusic").play();
            }
            function copyAction() {
                const pMusic = document.getElementById("clickMusic");
                pMusic.currentTime = 0;
                pMusic.play();
                navigator.clipboard.writeText("MAU NYURI SCRIPT PINTER DIKIT DEK");
                document.querySelector('.btn-copy').innerText = "BERHASIL DISALIN!";
                setTimeout(() => { document.querySelector('.btn-copy').innerText = "Salin Script"; }, 2000);
            }
        </script>
    </body>
    </html>
  `);
}
