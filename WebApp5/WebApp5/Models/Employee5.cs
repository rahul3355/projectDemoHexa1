using System;
using System.Collections.Generic;

#nullable disable

namespace WebApp5.Models
{
    public partial class Employee5
    {
        public int Id { get; set; }
        public int EmployeeId { get; set; }
        public string Name { get; set; }
        public int EmpLevel { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public int? ManagerId { get; set; }
    }
}
