function performTask(name, callback) {
    console.log(`'${name}' in progress!`)
  
    setTimeout(() => {
      console.log(`Done performing '${name}!'`)
      callback()
    }, 1000 * Math.random())
}

function task(name) {
    return () => new Promise((resolve, reject) => {
        performTask(name, resolve)
    })
}

function parallel(tasks) { 
    return Promise.all(tasks.map(t => t()))
}

(async function() {
    const task1 = task("add sugar")
    const task2 = task("add spice")
    const task3 = task("add everything nice")
    const task4 = task("add chemical X")
  
    await parallel([task1, task2, task3, task4])
  
    console.log("Finished all tasks in parallel!")
})()