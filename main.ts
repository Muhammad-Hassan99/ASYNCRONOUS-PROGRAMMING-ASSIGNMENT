// Question 1: Write a TypeScript function that uses async/await to wait for 2 seconds and then returns a string "Hello World"
function w1(time:number):Promise<void>{
    return new Promise((resolve)=>
    setTimeout(resolve,time))
    }
    async function  print():Promise<string> {
        await w1(1500) 
        return "Hello world"
       
    }
    
    async function main1() {
        const mes=await print()
     console.log(mes);
     }
     
    main1()
    
    
    // Question 2: Create a TypeScript function that takes a callback function as an argument and uses setTimeout to call the callback after 1 second.
    function h2(cb:()=>void){
    setTimeout(()=>{
    cb()
    },1000)
    }
    h2(()=>{
        console.log("hassan");
        
    })
    
    
    // Question 3: Write a TypeScript function that returns a Promise that resolves with the value "Resolved!" after 3 seconds.
    function h3(){
        let promise=new Promise((resolve,reject)=>{
         setTimeout(()=>{
         resolve("Resolved")
         },3000)
        })
        .then((res)=>{
        console.log(res);
        
        }).catch((err)=>{
            console.log(err);
            
        })
    }  
    h3()
    
    
    
    
    
    
    //Question 4: Create a TypeScript function that uses async/await to wait for two Promises to resolve and then returns their results as an array.
    async function h4():Promise<string[]> {
        let prom1:Promise<any>=new Promise((resolve)=>{
          setTimeout(()=>{
            console.log("hassan");
            
            resolve(" Succesfully Promise 1 resolve")
          },5000)
        })
        let prom2:Promise<any>=new Promise((resolve)=>{
            setTimeout(()=>{
                console.log("Shurem");
                
              resolve(" Succesfully Promise 2 resolve")
            },7000)
          }) 
          let z1=await  prom1
          let z2=await prom2
          return [z1,z2]
         
    }
    h4().then((res)=>{
        console.log(res);
        
    })
    
    //Question 5: Write a TypeScript function that uses async/await to wait for a Promise to resolve and then logs the result to the console.
    async function h5() {
        let prom3=new Promise((resolve, reject) => {
            resolve("Hassan")
        })
        let z3=await prom3
        .then((res)=>{
            console.log(res);
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }
    h5()
    
    //Question 6: Write a TypeScript function that uses async/await to wait for a Promise to reject and then logs the error to the console.
    
    async function h6() {
        let prom4=new Promise((resolve, reject) => {
            reject("rejected")
        })
        let z3=await prom4
        .then((res)=>{
            console.log(res);
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }
    h6()
    
    
    
    
    
    // Question 7: Create a TypeScript function that takes a number as an argument and returns a Promise that resolves with the square of the number after a delay of 1 second.
    function h7(j1:number):Promise<number>{
    let prom5:Promise<number>=new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(j1**2)
        },1000)
    })
    return prom5
    }
    h7(5).then((res)=>{
        console.log(res);
        
    })
    
    
    //Question 8: Write a TypeScript function that uses async/await to wait for an array of Promises to resolve and then returns an array of their results.
    async function m1(arrayofPromises: Promise<any>[]): Promise<any> {
        
        let res:any[]=[]
        for(let i=0;i<arrayofPromises.length;i++){
            let promise12=arrayofPromises[i]
            const result = await promise12;
            res.push(result);
        }
      
        return res
      }
      let myPromise1 = Promise.resolve("resolves 1");
      let myPromise2 = Promise.resolve("resolves 2");
      let myPromise3 = Promise.resolve("resolves 3");
      let myPromise4 = Promise.resolve("resolves 4");
      
      let logPromise = m1([
        myPromise1,
        myPromise2,
        myPromise3,
        myPromise4,
      ]).then((res) => console.log(res));
      
    
      //Question 9: Create a TypeScript function that uses setTimeout to call a function repeatedly every 2 seconds.
    
        function m3(){
            console.log("Hello world");
            
        }
        function m4(){
            m3()
            setTimeout(m4,2000)
           
        }
        m4()
    
    //Question 10: Write a TypeScript function that uses async/await to wait for a Promise to resolve and then returns a new Promise that resolves with the result multiplied by 2. 
    
    async function m5(prom:Promise<number>):Promise<number> {
    let ans=await prom
    return ans*2    
    }
    let newprom=new Promise<number>((resolve) => {
        setTimeout(()=>{
            resolve(9)
        })
    })
    m5(newprom).then((result)=>{
    console.log(result);
    
    })