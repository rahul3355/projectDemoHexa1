using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace WebApp5.Models
{
    public partial class Employeelm
    {
        public Employeelm()
        {
            Leavelms = new HashSet<Leavelm>();
        }

        public int Id { get; set; }

        [Required]
        public int EmployeeId { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 2)]
        public string Name { get; set; }

        [Required]
        [Range(1, 3)]
        public int EmpLevel { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [StringLength(10, MinimumLength = 10,
           ErrorMessage = "Phone must have length of 10")]
        public string Phone { get; set; }

        [Required]
        public int? ManagerId { get; set; }

        public string icon { get; set; }

        public virtual ICollection<Leavelm> Leavelms { get; set; }
    }
}
