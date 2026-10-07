import { useEffect, useState } from "react";
import { getCourses } from "../services/courseApi";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function fetchCourses() {
      try {
        setLoading(true);
        setError("");

        const response = await getCourses();

        if (!ignore) {
          setCourses(response.data);
        }
      } catch (error) {
        if (!ignore) {
          console.error("Error loading courses:", error);
          setError(
            "Unable to load courses. Check the backend and try again."
          );
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    fetchCourses();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <section>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Course Management</h2>

        {!loading && !error && (
          <span className="badge bg-primary fs-6">
            Total Courses: {courses.length}
          </span>
        )}
      </div>

      {loading && (
        <div className="alert alert-info">
          Loading courses...
        </div>
      )}

      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      {!loading && !error && courses.length === 0 && (
        <div className="alert alert-warning">
          No courses available.
        </div>
      )}

      {!loading && !error && courses.length > 0 && (
        <div className="card shadow-sm">
          <div className="card-header">
            <strong>Course List</strong>
          </div>

          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>ID</th>
                    <th>Code</th>
                    <th>Title</th>
                    <th>Credits</th>
                  </tr>
                </thead>

                <tbody>
                  {courses.map((course) => (
                    <tr key={course.id}>
                      <td>{course.id}</td>
                      <td>{course.code}</td>
                      <td>{course.title}</td>
                      <td>{course.credits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Courses;