function CourseNavigator(highlight = 'Home') {
  const sections = [
    {label: 'Home', href: 'index.html'},
    {label: 'Modules', href: 'modules.html'},
    {label: 'Piazza', href: 'http://piazza.com'},
    {label: 'Zoom', href: '#'},
    {label: 'Assignments', href: 'assignments.html'},
    {label: 'Quizzes', href: 'quizzes.html'},
    {label: 'Grades', href: 'grades.html'},
    {label: 'People', href: '#'},
    {label: 'Announcements', href: '#'},
    {label: 'Pages', href: '#'},
    {label: 'Discussions', href: '#'},
    {label: 'Syllabus', href: '#'},
  ]

  return (`
    <div class="list-group">
        ${
          sections.map(section =>
            `<a class="list-group-item ${section.label === highlight ? 'active' : ''}"
                href="${section.href}">
                ${section.label}
             </a>`
          ).join('')
        }
    </div>
  `)
}
export default CourseNavigator