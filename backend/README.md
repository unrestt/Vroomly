# Vroomly - API Documentation (Mock API)

Dokumentacja punktów końcowych (endpoints) dla systemu ogłoszeń motoryzacyjnych Vroomly. Poniższe API bazuje na strukturze bazy danych oraz serwerze mockującym `json-server`.

Domyślny adres bazowy: `http://localhost:5000`

---

## Jak uruchomić serwer mocków (Szybki Start)

Aby uruchomić to API lokalnie, wykonaj następujące kroki w terminalu:

1. **Upewnij się, że jesteś w głównym folderze projektu** (`Vroomly`).
2. **Uruchom serwer za pomocą `npx`:**
   ```bash
   npx json-server db.json --port 5000
   ```
3. API będzie dostępne pod adresem: `http://localhost:5000`

---

## Spis treści
1. [Kategorie (`/categories`)](#1-kategorie-categories)
2. [Marki i Modele (`/makes`, `/models`)](#2-marki-i-modele-makes-models)
3. [Użytkownicy (`/users`)](#3-użytkownicy-users)
4. [Ogłoszenia (`/listings`)](#4-ogłoszenia-listings)
5. [Zdjęcia (`/images`)](#5-zdjęcia-images)
6. [Zaawansowane techniki pobierania danych w json-server](#6-zaawansowane-techniki-pobierania-danych-w-json-server)

---

## 1. Kategorie (`/categories`)

Obsługuje kategorie pojazdów (np. Osobowe, Motocykle, Dostawcze).

### Pobierz wszystkie kategorie
* **Metoda:** `GET`
* **Ścieżka:** `/categories`
* **Odpowiedź (200 OK):**
```json
[
  { "id": 1, "name": "Osobowe" },
  { "id": 2, "name": "Motocykle" }
]
```

---

## 2. Marki i Modele (`/makes`, `/models`)

Relacja: Kategoria -> Marki -> Modele.

### Pobierz wszystkie marki
* **Metoda:** `GET`
* **Ścieżka:** `/makes`
* **Parametry opcjonalne:**
  * `categoryId` - filtruje marki przynależne do danej kategorii (np. `/makes?categoryId=1`)

### Pobierz wszystkie modele dla danej marki
* **Metoda:** `GET`
* **Ścieżka:** `/models`
* **Parametry opcjonalne:**
  * `makeId` - filtruje modele przynależne do wybranej marki (np. `/models?makeId=1`)

---

## 3. Użytkownicy (`/users`)

Zarządzanie kontami użytkowników (sprzedawców prywatnych oraz dealerów).

### Pobierz profil użytkownika
* **Metoda:** `GET`
* **Ścieżka:** `/users/{id}`
* **Odpowiedź (200 OK):**
```json
{
  "id": 1,
  "email": "jan.kowalski@gmail.com",
  "role": "private",
  "phoneNumber": "+48 500 600 700",
  "createdAt": "2026-01-15T10:20:30Z"
}
```

---

## 4. Ogłoszenia (`/listings`)

Główny zasób aplikacji. Zawiera szczegółowe parametry pojazdu.

### Pobierz listę ogłoszeń (z paginacją i filtrami)
* **Metoda:** `GET`
* **Ścieżka:** `/listings`
* **Przydatne parametry filtrowania:**
  * `_page` & `_limit` - Paginacja (np. `/listings?_page=1&_limit=10`)
  * `makeId` - Filtrowanie po marce (np. `/listings?makeId=1`)
  * `productionYear_gte` / `productionYear_lte` - Zakres lat produkcji (np. `/listings?productionYear_gte=2018`)
  * `price_gte` / `price_lte` - Zakres cenowy
  * `q` - Wyszukiwanie pełnotekstowe (np. `/listings?q=S-line`)

### Pobierz szczegóły jednego ogłoszenia
* **Metoda:** `GET`
* **Ścieżka:** `/listings/{id}`

### Utwórz nowe ogłoszenie
* **Metoda:** `POST`
* **Ścieżka:** `/listings`
* **Nagłówki:** `Content-Type: application/json`
* **Body (JSON):**
```json
{
  "userId": 1,
  "categoryId": 1,
  "makeId": 1,
  "modelId": 1,
  "title": "Nowe ogłoszenie testowe",
  "description": "Opis oferowanego pojazdu...",
  "price": 45000,
  "productionYear": 2015,
  "mileage": 180000,
  "fuelType": "Benzyna",
  "engineCapacity": 1598,
  "enginePower": 125,
  "gearbox": "Manualna",
  "bodyType": "Hatchback",
  "color": "Czarny",
  "countryOfOrigin": "Polska",
  "steeringWheelSide": "LHD",
  "condition": "Używany",
  "location": "Gdańsk",
  "status": "aktywne",
  "isFeatured": false,
  "createdAt": "2026-06-21T12:00:00Z"
}
```

### Aktualizacja ogłoszenia
* **Metoda:** `PUT` (nadpisanie całości) lub `PATCH` (częściowa edycja)
* **Ścieżka:** `/listings/{id}`

### Usunięcie ogłoszenia
* **Metoda:** `DELETE`
* **Ścieżka:** `/listings/{id}`

---

## 5. Zdjęcia (`/images`)

Przechowuje linki do galerii zdjęć poszczególnych ogłoszeń.

### Pobierz wszystkie zdjęcia dla ogłoszenia
* **Metoda:** `GET`
* **Ścieżka:** `/images?listingId={listingId}`

### Dodaj zdjęcie do ogłoszenia
* **Metoda:** `POST`
* **Ścieżka:** `/images`
* **Body (JSON):**
```json
{
  "listingId": 1,
  "imageUrl": "https://example.com/photo.jpg",
  "isMain": false
}
```

---

## 6. Zaawansowane techniki pobierania danych w json-server

Dzięki zastosowaniu konwencji `Id` dla relacji, możesz wysyłać zapytania agregujące dane:

* **Pobranie ogłoszeń z pełnymi danymi relacyjnymi (Marka, Model, Zdjęcia):**
  Zamiast odpytywać API kilka razy, wyślij:
  ```http
  GET /listings?_expand=make&_expand=model&_embed=images
  ```
  Otrzymasz obiekt ogłoszenia zawierający zagnieżdżone obiekty `make`, `model` oraz tablicę `images`.

* **Sortowanie:**
  Dodaj parametry `_sort` oraz `_order` (np. sortowanie po cenie malejąco):
  ```http
  GET /listings?_sort=price&_order=desc
  ```
