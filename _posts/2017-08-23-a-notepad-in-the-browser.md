---
title: A notepad in the browser
layout: post
---
I take a lot of notes during the work day, and I usually have my Notes app at hand, but the thing that is **always** in front of me is the Browser, so the best thing would be to be able to take notes right there.

Recently, I tried a couple Chrome extensions to do this, but they're either overkill or they have ads (and I really dislike ads squeezing in every part of my day), so a couple nights ago I set up to scratch my own itch and come up with a solution.

## Presenting Notepad

Super original name, I know.

[![Screenshot](/assets/media/postimages/2017/08/notepad.png)](https://axelvaldez.github.io/notepad/)

Notepad is an editable webpage that saves its content in Local Storage. It's super fast and it doesn't require any instalation. Just [visit the url in your browser](https://axelvaldez.github.io/notepad/) and you're ready to go. If you want to keep using it, I suggest to put it in your browser's bookmarks bar, as a pinned tab, or as a start page.

## Usage

* Go to [https://axelvaldez.github.io/notepad/](https://axelvaldez.github.io/notepad/)
* Click Edit (or Ctrl + E)
* Type your stuff down
* Click Save (Ctrl + S)

That's it. In edit mode, you can use the following modifiers for text:

<table align="center">
    <thead>
      <tr>
        <th>Modifier</th>
        <th>What it does</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>&ast;Bold text&ast;</td>
          <td><strong>Bold text</strong></td>
      </tr>
      <tr>
          <td>&#95;Italicized text&#95;</td>
          <td><em>Italicized text</em></td>
      </tr>
      <tr>
          <td>!Highlighted text (to end of line)</td>
          <td><span style="background: #FEEB6B">Highlighted text (to end of line)</span></td>
      </tr>
      <tr>
          <td>--Strikethrough text (to end of line)</td>
          <td><span style="opacity: .25; text-decoration: line-through;">Strikethrough text (to end of line)</span></td>
      </tr>
    </tbody>
</table>

Also, urls starting with http:// or https:// will become clickable links.

## Actions available

<table align="center">
    <thead>
      <tr>
        <th>Action</th>
        <th>Hot key</th>
        <th>What it does</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>Edit</td>
          <td>Ctrl+E</td>
          <td>Enter edition mode</td>
      </tr>
      <tr>
          <td>Save</td>
          <td>Ctrl+S</td>
          <td>Saves the text input</td>
      </tr>
      <tr>
          <td>Cancel</td>
          <td>Esc</td>
          <td>Discards changes and exits edit mode</td>
      </tr>
      <tr>
          <td>Clear</td>
          <td></td>
          <td>Removes all the text</td>
      </tr>
    </tbody>
</table>

That is it. I hope you find it useful and you like it. If you do, please share it with your friends.

If you have an idea for an improvement, wanna fork it or collaborate, [this is the source code on Github](https://axelvaldez.github.io/notepad/).