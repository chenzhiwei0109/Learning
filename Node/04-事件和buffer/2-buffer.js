// 读取操作二进制数据0101
// 数据是从一端流向另一端，创建buffer区域专门用于在磁盘缓存。
// 公交车就是磁盘，人就是数据，公交车从一个地方到另一个地方，人太多就需要候场区大点。
// 候场区：buffer 人：数据 公交车：磁盘

// 缓冲区底层用c写的，效率很高，所以使用node做AI相关计算会用到buffer,但是一般不操作缓冲区


// 把字符串放入缓冲区
let b1 = Buffer.from('10');
console.log(b1) //<Buffer 31 30>
console.log(b1.toString())  //10


/* 初始化缓冲区 创建大小10字节的缓冲区，新缓冲区不会包含旧数据 */
let b2 = Buffer.alloc(10)
console.log(b2)  //<Buffer 00 00 00 00 00 00 00 00 00 00>

/* 不安全的方式,开辟时不会重置buffer区的数据 */
let b3 = Buffer.allocUnsafe(10)
console.log('不安全--------')
console.log(b3)//<Buffer 20 1f 71 00 00 00 02 00 00 00>
console.log(b3.toString()) // q   

b3[0] = '1'

console.log(b3)  //<Buffer 01 1f 71 00 00 00 02 00 00 00>