"use strict";

function exportUppercase(modExports)
{
  const names = Object.keys(modExports);
  for (const name of names)
  {
    const ucName = name.toUpperCase();
    modExports[ucName] = modExports[name];
  }
}

exports.uc = exportUppercase;
