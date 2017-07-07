---
title: Atom&#58; How to use Emmet in PHP files
layout: post
---
If you use Atom to work in HTML and WordPress (or any other thing where PHP and HTML are mixed), you've probably been annoyed by the fact that Emmet abbreviations refuse to expand inside a PHP file.

Well, the solution is very easy: to make this work, you just need to open keymap.cson in Atom (&#8984;+&#8679;+P then enter "open keymap") and add the following:

```
'atom-text-editor[data-grammar="text html php"]:not([mini])':
  'tab': 'emmet:expand-abbreviation-with-tab'
```

Save the file and that's it. Emmet now works in your PHP files.
