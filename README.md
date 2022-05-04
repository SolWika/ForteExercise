# ForteExercise - rozwiązanie

## Wykonała:

[Weronika Kurek-Pękala](https://github.com/SolWika)

## Opis projektu:

[Projekt na Figmie](https://www.figma.com/file/DNF5oDSn7NTO4Ls1kVkK1K/Task?node-id=103%3A7)

## Technologie użyte w projekcie:

1. React
2. Styled Components
3. Formik

## Użyte dodatki:

1. React datepicker
2. Moment.js
3. React toggledarkmode
4. Prettier

## Narzędzia pomocnicze

- Visual Studio Code
- Yarn
- Figma

Aby uruchomić aplikację na lokalnej maszynie, wykonaj następujące kroki:

1. Sklonuj repozytorium.
2. Otwórz je w ulubionym edytorze.
3. Zainstaluj zależności za pomocą komendy: yarn .
4. Uruchom serwer za pomocą komendy: yarn start .

## Opis wykonanego zadania

Cześć! Mam nadzieję, że to rozwiązanie będzie się Wam podobać.

Zacznę od początku, czytając zadanie w pierwszej kolejności zastanawiałam się jakich bibliotek użyć, jakich znaczników, co wybrać do stylowania, jak podejść do formularza i walidacji. Jeśli chodzi o stylizowanie componentów rozważałam Material UI i Styled Components. Bardzo zależało mi na tym by dobrze wykonać DatePiker'a, a czytając dokumentację zrozumiałam, że jest on dostępny w wersji alpha- v5.0.0-alpha.2 w Material UI, dlatego zdecydowałam że w tym przypadku zdecyduję się na Styled Components.

Następnie po pobraniu projektu przeanalizowałam jego strukturę, zapoznałam się z plikami i zaczełam planować własną strukturę. Componenty dwóch głównych stron znajdują się w folderze pages. Każdy component znajduje się w folderze o takiej samej nazwie jak jego nazwa, ponieważ zawiera też plik, którym stylizuję dany component.

Po zainstalowaniu Styled Component skonfigurowałam początkowo theme i dodałam przełączanie między jasnym a ciemnym trybem. Za pomocą useEffect, sprawdzamy, czy użytkownik woli tryb ciemny. Jeśli tak, zastąpimy domyślną wartość jasnego trybu. Ponadto w toggleTheme zapiujemy wybrany motyw w pamięci lokalnej, aby upewnić się, że każda interakcja użytkownika zastąpi domyślną preferencję. Wiem, że nie było tego w wymaganiach, ale chciałam dodać coś od siebie i spróbować pierwszy raz skonfigurować theme. Colory tła i czcionek przekazywane są przez propsy. Dodałam też w prawym górnym rogu iconę, za pomocą, której możemy zmieniać tryb.

Aplikację rozpoczęłam od Logo, stwierdziłam, że dodam go w navigacji, po kliknięciu w logo wracamy na stronę InternList.

Następnie przeszłam do strony InternList, mimo braku projektu mobilnego na figmie postanowiłam kierować się jednak podejściem Mobile First. Strona InternList jest przygotowana zarówno pod urządzenia mobilne jak i dla większych urządzeń. Niestety na stronę EditIntern zabrakło mi czasu, stąd przygotowana jest tylko wersja desktopowa. Na pewno gdybym miała okazję rozwijać ten projekt to byłaby to rzecz, którą w dalszym ciągu bym rozwijała.

W componencie InternList pobieranie stażystów było już przygotowane, natomiast za pomocą metody map tworzę nową tablicę zawierającą wyniki wywoływania podanej funkcji dla każdego elementu wywołującej tablicę interns. Elementy listy to osobny component, w którym przekazuję potrzebne propsy.

Prawdziwym wyzwaniem była dla mnie strona EditIntern, podczas kursu w którym uczestniczę formularze budujemy właśnie za pomocą biblioteki Formik i mimo, że w projekcie, który realizujemy nie byłam za nie odpowiedzialna to w tym zadaniu zdecydowałam, że samodzielnie spróbuję wykonać formularz właśnie z pomocą Formika. Bez większych problemów udało mi się wykonać inputy z Full Name i Emailem, wykonałam też dla nich opis błędów. Ikonki pobierałam z figmy jako svg. Bardzo dużą ilość problemów napotkałam przy internshipStart i internshipEnd. Daty zawarte w db.json są w nieznanym dla mnie formacie np. 2021-09-30T00:00+00Z, i mimo szukania jaki to format, niestety nie udało mi się znaleźć tej informacji, prośba czy byłaby możliwość byście odpowiedzieli mi na to pytanie? Czy ten format jest prawidłowy? Próbowałam tą datę parsować, użyłam biblioteki moment.js do konwersji jednak cały czas otrzymywałam komunikat o nieprawidłowym formacie daty. W związku z tym postanowiłam ją zmienić na inny format. Przyznaje, że nigdy wcześniej nie pracowałam z datami, zrozumiałam jak wielę muszę się w tym zakresie douczyć i jak ważne jest to dla aplikacji. Kiedy udało mi się już odpowiednio wyświetlić datę, to zaczęłam zastanawiać się jak powinien wyświetlać się kalendarz, czy tydzień powienien zaczynać się od niedzieli czy od poniedziałku, ostatecznie zostawiłam wersję z poniedziałkiem. Zwróciłam tutaj uwagę na format zapisu tej daty taki jak tutaj w polsce, natomiast sama aplikacja pisana jest w języku angielskim gdzie daty i kalendarz wyświetla się inaczej. W imputach z datami brakuje rysunku kalendarza, rzecz do dalszego rozwoju. Duże problemy sprawiło mi połączenie DatePickera z formikiem i zapisywanie tych dat do bazy. Udało mi się to w końcu wykonać, jednak było to dla mnie bardzo trudne zadanie i zdaję sobie sprawę z tego ile jeszcze muszę poznać i w jakim kierunku dalej się rozwijać.

W figmie, ani w opisie zadania nie było jasno napisane co ma się wydarzyć po naciśnięciu przycisku submit, więc po jego naciśnięciu dane zapisują się do bazy, ale wracamy do strony ze stażystami przyciskiem Back to list.
Dodałam też stronę 404, jednak aplikacja wymaga rozwoju pod względem obsługi błędów np. podania nieprawidłowej daty, wpisanie adresu strony z numerem stażysty, którego nie ma w bazie, błędu z brakiem połączenia z bazą danych.

To co mogłabym jeszcze dodać to biblioteka i18n, do przechowywania tekstów jako obiektów i obsługi większej ilości języków, jak poski czy norweski.

Dzięki wielkie za to wyzwanie! Wiele się nauczyłam.
