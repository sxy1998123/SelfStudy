/* 
*
*    window系统下不要在同目录创建node文件,因为命令行下node命令会被解释为执行目录下node文件而不是用node环境执行
*
*/
// console.log(__dirname);
// console.info(__filename);
console.log(global)