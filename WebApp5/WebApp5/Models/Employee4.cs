using System;
using System.Collections.Generic;

#nullable disable

namespace WebApp5.Models
{
    public partial class Employee4
    {
        public Employee4()
        {
            InverseManager = new HashSet<Employee4>();
            Leave4s = new HashSet<Leave4>();
        }

        public int Id { get; set; }
        public int EmployeeId { get; set; }
        public string Name { get; set; }
        public int EmpLevel { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public int? ManagerId { get; set; }

        public virtual Employee4 Manager { get; set; }
        public virtual ICollection<Employee4> InverseManager { get; set; }
        public virtual ICollection<Leave4> Leave4s { get; set; }
    }
}
