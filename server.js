const express = require('express');
const path = require('path');
const { clog } = require('./middleware.clog');
const api = require('./routes/index.js');

const cpus = ['[Dual CPU] AMD Ryzen Threadripper PRO 3995WX	113,693',
'AMD Ryzen Threadripper PRO 5995WX	100,706',
'[Dual CPU] AMD Ryzen Threadripper PRO 3975WX	98,811',
'AMD Ryzen Threadripper PRO 3995WX	83,410',
'AMD Ryzen Threadripper 3990X	81,181',
'AMD Ryzen Threadripper PRO 5975WX	78,291',
'AMD Ryzen Threadripper PRO 5965WX	67,986',
'[Dual CPU] AMD Ryzen Threadripper PRO 3955WX	63,885',
'AMD Ryzen Threadripper 3970X	63,663',
'AMD Ryzen Threadripper PRO 3975WX	62,895',
'AMD Ryzen Threadripper 3960X	54,785',
'AMD Ryzen Threadripper PRO 5955WX	50,623',
'AMD Ryzen 9 5950X	45,856',
'Intel Core i9-12900KS	44,845',
'Intel Core i9-12900KF	41,518',
'Intel Core i9-12900K	41,406',
'Apple M1 Ultra 20 Core	41,182',
'AMD Ryzen Threadripper PRO 5945WX	40,888',
'AMD Ryzen Threadripper PRO 3955WX	40,044',
'Intel Xeon W-3265M @ 2.70GHz	39,618',
'AMD Ryzen 9 5900X	39,329',
'AMD Ryzen 9 3950X	39,049',
'Intel Xeon W-3175X @ 3.10GHz	37,167',
'Intel Core i9-12900F	36,929',
'Intel Core i9-12900	36,766',
'AMD Ryzen 9 5900	34,643',
'Intel Core i7-12700K	34,539',
'Intel Core i7-13700	34,431',
'Intel Core i7-12700KF	34,350',
'Intel Core i9-12900T	33,728',
'AMD Ryzen Threadripper PRO 3945WX	33,320',
'Intel Core i9-10980XE @ 3.00GHz	33,306',
'AMD Ryzen 9 3900XT	32,958',
'AMD Ryzen 9 3900X	32,776',
'AMD Ryzen Threadripper 2990WX	32,370',
'Intel Core i9-9980XE @ 3.00GHz	32,256',
'Intel Core i7-12700F	31,594',
'AMD Ryzen 9 PRO 3900	31,407',
'Intel Core i7-12700	31,341',
'Intel Core i9-9960X @ 3.10GHz	30,839',
'AMD Ryzen 9 3900	30,622',
'Intel Core i9-7980XE @ 2.60GHz	30,220',
'Intel Core i9-9990XE @ 4.00GHz	30,162'];

for (const cpu of cpus){
    console.log(cpu.split(/[@\t]+[\w.,]+/g));
}
