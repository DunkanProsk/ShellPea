const sayHelloWithArguments = (say, name = 'Admin') => {
  console.log(say + ' ' + name)
}

const sayHelloNoArguments = () => {
  console.log('Hi Admin')
}

const saHelloReturn = () => {
  return 'Hi Admin'
}

const checkInput = (callback, ...arg) => {
	let i = 0

	arg.map( function(arg) {
		let value = (arg === '') ? i++ : false;
	})

	i === 1 ? false : callback()
}

checkInput(() => {console.log('Nice!')},'Hi','Hi','Hi','Hi','Hi','Hi','Hi','Hi')
checkInput(() => {console.log('Nice!')},'Hi','','Hi','Hi','Hi','Hi','Hi','Hi','Hi')

sayHelloWithArguments('Hi', 'Elone')
sayHelloWithArguments('Hi')
sayHelloNoArguments()