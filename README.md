# Keseimbangan Kurung
Sebagai programmer penggunaan kurung sangatlah penting untuk menghindari kesalahan penulisan.

Setiap menuliskan baris kode programmer harus menutup kurung sesuai dengan kurung yang dibuka.

Anda sebagai programmer harus membuat replika dari fungsi untuk menghindari kesalahan penulisan, yaitu dengan membuat fungsi untuk memeriksa apakah kurung dibuka dan ditutup dengan benar.

Misalnya baris string yang terdiri dari tanda kurung (`(`, `[`,`{`,`)`,`]`,`}`) dan karakter opsional lainnya. 

Fungsi harus mengembalikan boolean yang mewakili apakah string seimbang sehubungan dengan tanda kurung.

Sebuah string dikatakan seimbang jika memiliki banyak kurung buka dari jenis tertentu karena memiliki kurung tutup dari jenis itu dan jika tidak ada kurung yang tidak cocok. Perhatikan bahwa braket pembuka tidak dapat cocok dengan braket penutup yang sesuai yang berada sebelumnya, dan demikian pula, braket penutup tidak dapat cocok dengan braket pembuka yang sesuai yang berada setelahnya. Juga, tanda kurung tidak boleh saling tumpang tindih seperti pada `[(])`.

### Input
```js
string = "([])(){}(())()()"
```

### Output
```js
true
```

## Instructions
1. Anda harus melengkapi fungsi `balancedBrackets` pada file `balancedBrackets.js`
2. Fungsi harus mengembalikan nilai `true` jika string seimbang dan `false` jika tidak.
3. Jalankan program dengan menggunakan perintah `node run`