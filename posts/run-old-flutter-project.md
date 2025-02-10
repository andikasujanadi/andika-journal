---
title: "Menjalankan Flutter Project Lama dengan Java 17"
date: "10-02-2025"
place: "Banjarmasin"
---
Sumber: [issue github](https://github.com/flutter/flutter/issues/156304#issuecomment-2397707812)

Ada 3 file yang harus diubah pada flutter project anda agar flutter project lama bisa berjalan pada flutter terbaru di saat blog ini dibuat.

app\build.gradle
```
android {
  ndkVersion "25.1.8937393"

compileOptions {
  sourceCompatibility JavaVersion.VERSION_17
  targetCompatibility JavaVersion.VERSION_17
}
kotlinOptions {
  jvmTarget = 17
}
```

settings.gradle
```
id "com.android.application" version "8.3.2" apply false
id "org.jetbrains.kotlin.android" version "2.0.20" apply false
```

gradle-wrapper.properties
```
distributionUrl=https\://services.gradle.org/distributions/gradle-8.10.2-all.zip
```

Clean project kalian lalu coba jalankan lagi

- Hapus hasil build yang ada dan semua dependency project
    ```
    flutter clean
    ```

- Unduh lagi dependency
    ```
    flutter pub get
    ```

-  Jalankan Project
    ```
    flutter run
    ```