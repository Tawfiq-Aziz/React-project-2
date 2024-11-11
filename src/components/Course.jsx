const Part = ({part}) => {
  console.log('parts.......',{part})
  return (
    <div>
      {part.name} {part.exercises}
    </div>
  )
}

const Course = ({ course }) =>{
  console.log('working')
    return (
      <div>
        <h1>{course.name}</h1>

        <p> 
          {course.parts.map(part => 
          <Part key={part.id} part={part} />
          )} 
        </p>
        
        <p>
          Total of {course.parts.reduce((sum,val) => sum+val.exercises,0)
          } exercises
        </p>
      </div>

    )
  }

  export default Course