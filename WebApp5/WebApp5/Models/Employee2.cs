using System;
using System.Collections.Generic;

#nullable disable

namespace WebApp5.Models
{
    public partial class Employee2
    {
        public int Eid { get; set; }
        public string Ename { get; set; }
        public int Did { get; set; }
        public string Dmanager { get; set; }
        public DateTime? LeaveFrom { get; set; }
        public DateTime? LeaveTo { get; set; }
        public string LeaveType { get; set; }
        public string LeaveDesc { get; set; }
        public int? LeavesInHand { get; set; }
        public int? Status { get; set; }
    }
}
