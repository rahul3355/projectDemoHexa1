using System;
using System.Collections.Generic;

#nullable disable

namespace WebApp5.Models
{
    public partial class Leave4
    {
        public int Lid { get; set; }
        public int EmployeeId { get; set; }
        public int EmplLevel { get; set; }
        public int LeavesInHand { get; set; }
        public DateTime LeaveStart { get; set; }
        public DateTime LeaveEnd { get; set; }
        public string LeaveType { get; set; }
        public string Reason { get; set; }
        public int LeaveStatus { get; set; }
        public int? LeaveApplied { get; set; }

        public virtual Employee4 Employee { get; set; }
    }
}
