# JSON Format für Cross-Site-Requests v. 1

### Test Daten
```
{
    'web.de': {
        sources: [
            'google.de',
            'gmx.de'
        ]
    },
    'img.web.de': {
        sources: [
            'web.de',
            'gmx.de'
        ]
    }
}
```

### Pseudo-Beispiel:
```
{
    'domain_of_external_resource': {
        'sources_from_where_it_was_linked': [
            'domain1',
            'domain2
        ]
    }
}
```
