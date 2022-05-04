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

Zacznę od początku, czytając zadanie w pierwszej kolejności zastanawiałam się jakich bibliotek użyć, jakich znaczników użyć, co wybrać do stylowania, jak podejść do formularza i walidacji. Jeśli chodzi o stylizowanie componentów rozważałam Material UI i Styled Components. Bardzo zależało mi na tym by dobrze wykonać DatePiker'a, a czytając dokumentację zrozumiałam, że jest on dostępny w wersji alpha- v5.0.0-alpha.2, dlatego zdecydowałam że w tym przypadku zdecyduję się na Styled Components.

Następnie po pobraniu projektu przeanalizowałam jego strukturę, zapoznałam się z plikami i zaczełam planować własną strukturę. Wszystkie componenty znajdują się w folderze o tej samej nazwie. Componenty dwóch głównych stron znajdują się w folderze pages. Każdy component znajduje się w folderze o takiej samej nazwie jak jego nazwa, ponieważ zawiera też plik, którym stylizuję dany component.

Po zainstalowaniu Styled Component skonfigurowałam początkowo theme i dodałam przełączanie między jasnym a ciemnym trybem. Za pomocą useEffect, sprawdzamy, czy użytkownik woli tryb ciemny. Jeśli tak, zastąpimy domyślną wartość jasnego trybu. Ponadto w toggleTheme zapiujemy wybrany motyw w pamięci lokalnej, aby upewnić się, że każda interakcja użytkownika zastąpi domyślną preferencję. Wiem, że nie było tego w wymaganiach, ale chciałam dodać coś od siebie i spróbować pierwszy raz skonfigurować theme. Colory tła i czcionek przekazywane są przez propsy. Dodałam też w prawym górnym rogu iconę, za pomocą, której możemy zmieniać tryb.

Aplikację rozpoczęłam od stylizowania strony InternList, mimo braku projektu mobilnego na figmie postanowiłam kierować się jednak podejściem Mobile First. Strona InternList jest przygotowana zarówno pod urządzenia mobilne jak i dla większych urządzeń. Niestety na stronę EditIntern zabrakło mi czasu, stąd przygotowana jest tylko wersja desktopowa. Na pewno gdybym miała okazję rozwijać ten projekt to byłaby to rzecz, którą w dalszym ciągu bym rozwijała.

Pobieranie stażystów było już przygotowane, natomiast za pomocą metody map tworzę nową tablicę zawierającą wyniki wywoływania podanej funkcji dla każdego elementu wywołującej tablicy interns. Elementy listy to osobny component, w którym przekazuję propsy
