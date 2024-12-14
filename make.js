const fs = require('fs');
const { exec } = require('child_process');


fs.readFile('main.блядина', 'utf8', (err, data) => {
  if (err) {
    console.error('Ошибка при чтении файла:', err);
    return;
  }

  
  const tokenMapReverse = {
    'сам': 'auto',
    'пиздопроебашь': 'break',
    'ебучий случай': 'case',
    'ыыы': 'char',
    'хуйня необучаемая': 'const',
    'ебашь': 'continue',
    'хулинет': 'default',
    'делай блять': 'do',
    'двараза': 'double',
    'хулинеработает': 'else',
    'ебень': 'enum',
    'впизде': 'extern',
    'точный': 'float',
    'аэ': 'for',
    'идинахуй': 'goto',
    'еслиблять': 'if',
    'ровный': 'inline',
    'сколько': 'int',
    'длинныйхуй': 'long',
    'регистратура': 'register',
    'дцп': 'restrict',
    'пизданиответ': 'return',
    'короткийхуй': 'short',
    'обосанный': 'signed',
    'размерычлена': 'sizeof',
    'недвижимость': 'static',
    'инфа': 'struct',
    'переобутся': 'switch',
    'ахахах': 'typedef',
    'ссср': 'union',
    'необосанный': 'unsigned',
    'пиздец': 'void',
    'ASSемблер': 'volatile',
    'выблядок': 'while',
    'спизди': '#include'
  };

  
  let modifiedData = data;
  for (const [key, value] of Object.entries(tokenMapReverse)) {
    const regex = new RegExp(key, 'g');
    modifiedData = modifiedData.replace(regex, value);
  }

  
  fs.writeFile('main.c', modifiedData, 'utf8', (err) => {
    if (err) {
      console.error('Ошибка при записи файла:', err);
      return;
    }
    console.log('Файл main.c успешно создан!');

    
    const outputFile = 'main'; 

    
    const compileCommand = `clang main.c -o ${outputFile} && chmod +x ${outputFile}`;
    
    exec(compileCommand, (err, stdout, stderr) => {
      if (err) {
        console.error('Ошибка при компиляции:', err);
        return;
      }
      if (stderr) {
        console.error('stderr:', stderr);
        return;
      }
      console.log('stdout:', stdout);
      console.log(`Компиляция завершена. Исполнимый файл создан: ${outputFile}`);
    });
  });
});
