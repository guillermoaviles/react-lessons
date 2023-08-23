const students = ["Mark", "Lucy", "Anna"];

const HTMLStudents = students.map((student) => {
    return <li key={student}>{student}</li>
});

function Students() {
    return (
        <div className="list">
            <h2>Student List</h2>
            {HTMLStudents}
        </div>
    )
}

export default Students;