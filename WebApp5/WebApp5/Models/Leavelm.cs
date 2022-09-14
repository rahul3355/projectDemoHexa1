using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace WebApp5.Models
{
    public partial class Leavelm
    {
        public int Lid { get; set; }

        //[Required]
        public int EmployeeId { get; set; }

        //[Required]
        [Range(1, 3)]
        public int EmplLevel { get; set; }

        //[Required]
        public int ManagerId { get; set; }

        //[Required]
        [Range(1, 30)]
        public int LeavesInHand { get; set; }

        //[Required]
        //[DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime LeaveStart { get; set; }

        //[Required]
        //[DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime LeaveEnd { get; set; }

        //[Required]
        public string LeaveType { get; set; }

        //[Required]
        [MinLength(3)]
        public string Reason { get; set; }

        [Required]
        public string LeaveStatus { get; set; }

        public virtual Employeelm Employee { get; set; }
    }
}
