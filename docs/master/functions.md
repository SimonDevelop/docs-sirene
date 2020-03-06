# Fonctions

Liste des divers fonctionnalités de l'objet `Sirene`.

## Siren
La fonction `siren($siren)` vous permet de faire une recherche depuis un siren donné, les informations d'un ou plusieurs établissements vous seront donnez dans le tableau `uniteLegale`.
``` php
<?php
$result = $sirene->siren("<siren>");
```
Le resultat retourne un tableau comme ceci :
```
array(2) {
  'header' =>
  array(2) {
    'statut' =>
    int(200)
    'message' =>
    string(2) "OK"
  }
  'uniteLegale' =>
  array(x) {
    ...
  }
}
```


## Siret
La fonction `siret($siret)` vous permet de faire une recherche depuis un siret donné, les informations de l'établissement vous seront donnez dans le tableau `etablissement`.
``` php
<?php
$result = $sirene->siret("<siret>");
```
Le resultat retourne un tableau comme ceci si résultat trouvé:
```
array(2) {
  'header' =>
  array(2) {
    'statut' =>
    int(200)
    'message' =>
    string(2) "ok"
  }
  'etablissement' =>
  array(x) {
    ...
  }
}
```
