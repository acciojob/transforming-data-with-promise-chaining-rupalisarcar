//your JS code here. If required.
const btn = document.getElementById('btn');
const output = document.getElementById('output');
const promise1 =()=>{
	return new Promise((resolve,reject)=>{
		const inputNumber = document.getElementById('ip').value;
		console.log(`inputNumber`, inputNumber)
		setTimeout(()=>{
			resolve(inputNumber)
		},2000)
	})
}

const promise2 =(num)=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(num*2)
		},2000)
	})
}

const promise3 =(num)=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(num-3)
		},1000)
	})
}

const promise4 =(num)=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(num/2)
		},1000)
	})
}

const promise5 =(num)=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(num+10)
		},1000)
	})
}
btn.addEventListener('click',()=>{
	promise1().then((num)=>{
		output.innerHTML=`Result ${num}`;
		return promise2(num)
	}).then((num)=>{
		output.innerHTML=`Result ${num}`;
		return promise3(num)
	}).then((num)=>{
		output.innerHTML=`Result ${num}`;
		return promise4(num)
	}).then((num)=>{
		output.innerHTML=`Result ${num}`;
		return promise5(num)
	}).then((num)=>{
		output.innerHTML = `Final Result ${num}`;
	}).catch((e)=>{
		console.log(e)
	})
})