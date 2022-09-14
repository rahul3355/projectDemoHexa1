using System;
using System.Collections.Generic;

#nullable disable

namespace WebApp5.Models
{
    public partial class Employees3
    {
        public Employees3()
        {
            InverseManager = new HashSet<Employees3>();
        }

        public int EmployeeId { get; set; }
        public string Name { get; set; }
        public int? EmpLevel { get; set; }
        public int? ManagerId { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string LeaveType { get; set; }
        public string LeaveDesc { get; set; }
        public DateTime? LeaveStartDate { get; set; }
        public DateTime? LeaveEndDate { get; set; }
        public int? LeavesInHand { get; set; }
        public int? LeaveStatus { get; set; }

        public virtual Employees3 Manager { get; set; }
        public virtual ICollection<Employees3> InverseManager { get; set; }
    }
}
