const express = require("express");
const router = express.Router();
const BarangController = require("../controllers/Barang.controller");
const { verifyAccessToken } = require("../helpers/jwt_helper");
// Menggunakan middleware verifyAccessToken untuk memeriksa token pada setiap request.
// Hanya pengguna yang memiliki token valid yang dapat mengakses endpoint ini. 

router.get("/", verifyAccessToken, BarangController.getAllBarang);
// Endpoint ini hanya bisa diakses oleh pengguna yang memiliki token valid, Pengguna akan mendapatkan semua barang yang terdaftar.

router.get("/:id", verifyAccessToken, BarangController.getBarangById);
// Endpoint ini hanya bisa diakses oleh pengguna yang memiliki token valid, Pengguna akan mendapatkan informasi barang berdasarkan id yang diminta.

router.post("/", verifyAccessToken, BarangController.addBarang);
// Endpoint ini hanya bisa diakses oleh pengguna yang memiliki token valid, Pengguna dapat menambahkan barang baru ke dalam database.

router.patch("/:id", verifyAccessToken, BarangController.editBarang);
// Endpoint ini hanya bisa diakses oleh pengguna yang memiliki token valid, Pengguna dapat mengedit informasi barang berdasarkan id yang diminta.

router.delete("/:id", verifyAccessToken, BarangController.deleteBarang);
// Endpoint ini hanya bisa diakses oleh pengguna yang memiliki token valid, Pengguna dapat menghapus barang berdasarkan id yang diminta.

module.exports = router;


// Note : file Barang.route.js yang menunjukkan pembatasan hak akses terhadap sumber daya data tertentu menggunakan middleware verifyAccessToken. 
// middleware verifyAccessToken: Middleware ini  memeriksa token akses  di header otorisasi setiap request. Jika token valid, request diteruskan ke controller yang sesuai. Jika tidak,  pengguna akan menerima kesalahan yang tidak valid.

