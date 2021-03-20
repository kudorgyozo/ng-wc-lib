
rmdir dist /s /q
md dist\components
:: node compileElements.js
rmdir dist\tmp /s /q

cd ..\..