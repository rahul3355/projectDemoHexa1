using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace WebApp5.Models
{
    public partial class projectDemoContext : DbContext
    {
        public projectDemoContext()
        {
        }

        public projectDemoContext(DbContextOptions<projectDemoContext> options)
            : base(options)
        {
        }

        public virtual DbSet<EmpTemp> EmpTemps { get; set; }
        public virtual DbSet<Empbio> Empbios { get; set; }
        public virtual DbSet<Employee2> Employee2s { get; set; }
        public virtual DbSet<Employee4> Employee4s { get; set; }
        public virtual DbSet<Employee5> Employee5s { get; set; }
        public virtual DbSet<EmployeeTemp> EmployeeTemps { get; set; }
        public virtual DbSet<Employeelm> Employeelms { get; set; }
        public virtual DbSet<Employees3> Employees3s { get; set; }
        public virtual DbSet<Leave4> Leave4s { get; set; }
        public virtual DbSet<Leave5> Leave5s { get; set; }
        public virtual DbSet<Leave6> Leave6s { get; set; }
        public virtual DbSet<Leavelm> Leavelms { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
 //               optionsBuilder.UseSqlServer("Server=DESKTOP-HSCV0U7;Database=projectDemo;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<EmpTemp>(entity =>
            {
                entity.ToTable("Emp_Temp");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("id");

                entity.Property(e => e.Age).HasColumnName("age");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<Empbio>(entity =>
            {
                entity.ToTable("empbio");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("id");

                entity.Property(e => e.Image)
                    .HasColumnType("image")
                    .HasColumnName("image");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<Employee2>(entity =>
            {
                entity.HasKey(e => e.Eid);

                entity.ToTable("Employee2");

                entity.Property(e => e.Eid)
                    .ValueGeneratedNever()
                    .HasColumnName("eid");

                entity.Property(e => e.Did).HasColumnName("did");

                entity.Property(e => e.Dmanager)
                    .IsRequired()
                    .HasMaxLength(10)
                    .HasColumnName("dmanager")
                    .IsFixedLength(true);

                entity.Property(e => e.Ename)
                    .IsRequired()
                    .HasMaxLength(10)
                    .HasColumnName("ename")
                    .IsFixedLength(true);

                entity.Property(e => e.LeaveDesc)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("leave_desc");

                entity.Property(e => e.LeaveFrom)
                    .HasColumnType("date")
                    .HasColumnName("leave_from");

                entity.Property(e => e.LeaveTo)
                    .HasColumnType("date")
                    .HasColumnName("leave_to");

                entity.Property(e => e.LeaveType)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("leave_type");

                entity.Property(e => e.LeavesInHand).HasColumnName("leaves_in_hand");

                entity.Property(e => e.Status).HasColumnName("status");
            });

            modelBuilder.Entity<Employee4>(entity =>
            {
                entity.HasKey(e => e.EmployeeId)
                    .HasName("PK__employee__7AD04FF14549B8BB");

                entity.ToTable("employee4");

                entity.Property(e => e.EmployeeId)
                    .ValueGeneratedNever()
                    .HasColumnName("EmployeeID");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("ID");

                entity.Property(e => e.ManagerId).HasColumnName("ManagerID");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Phone)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.Manager)
                    .WithMany(p => p.InverseManager)
                    .HasForeignKey(d => d.ManagerId)
                    .HasConstraintName("FK_ManagerID2");
            });

            modelBuilder.Entity<Employee5>(entity =>
            {
                entity.HasKey(e => e.EmployeeId)
                    .HasName("PK__employee__7AD04FF1A23981CC");

                entity.ToTable("employee5");

                entity.Property(e => e.EmployeeId)
                    .ValueGeneratedNever()
                    .HasColumnName("EmployeeID");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("ID");

                entity.Property(e => e.ManagerId).HasColumnName("ManagerID");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Phone)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<EmployeeTemp>(entity =>
            {
                entity.ToTable("EmployeeTemp");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("id");

                entity.Property(e => e.Age).HasColumnName("age");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<Employeelm>(entity =>
            {
                entity.HasKey(e => e.EmployeeId)
                    .HasName("PK__employee__7AD04FF1D90717A5");

                entity.ToTable("employeelms");

                entity.Property(e => e.EmployeeId)
                    .ValueGeneratedNever()
                    .HasColumnName("EmployeeID");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("ID");

                entity.Property(e => e.ManagerId).HasColumnName("ManagerID");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Phone)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Employees3>(entity =>
            {
                entity.HasKey(e => e.EmployeeId)
                    .HasName("PK__Employee__7AD04FF1C5058090");

                entity.ToTable("Employees3");

                entity.Property(e => e.EmployeeId)
                    .ValueGeneratedNever()
                    .HasColumnName("EmployeeID");

                entity.Property(e => e.Email)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.LeaveDesc)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.LeaveEndDate).HasColumnType("date");

                entity.Property(e => e.LeaveStartDate).HasColumnType("date");

                entity.Property(e => e.LeaveType)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ManagerId).HasColumnName("ManagerID");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Phone)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.Manager)
                    .WithMany(p => p.InverseManager)
                    .HasForeignKey(d => d.ManagerId)
                    .HasConstraintName("FK_ManagerID");
            });

            modelBuilder.Entity<Leave4>(entity =>
            {
                entity.HasKey(e => e.Lid)
                    .HasName("PK__leave4__C6555721A2D0D9DD");

                entity.ToTable("leave4");

                entity.Property(e => e.Lid).HasColumnName("LID");

                entity.Property(e => e.EmployeeId).HasColumnName("EmployeeID");

                entity.Property(e => e.LeaveEnd)
                    .HasColumnType("date")
                    .HasColumnName("Leave_End");

                entity.Property(e => e.LeaveStart)
                    .HasColumnType("date")
                    .HasColumnName("Leave_Start");

                entity.Property(e => e.LeaveStatus).HasColumnName("Leave_status");

                entity.Property(e => e.LeaveType)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("Leave_type");

                entity.Property(e => e.Reason)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.Employee)
                    .WithMany(p => p.Leave4s)
                    .HasForeignKey(d => d.EmployeeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_EmployeeID4");
            });

            modelBuilder.Entity<Leave5>(entity =>
            {
                entity.HasKey(e => e.Lid)
                    .HasName("PK__leave5__C655572195498972");

                entity.ToTable("leave5");

                entity.Property(e => e.Lid).HasColumnName("LID");

                entity.Property(e => e.EmployeeId).HasColumnName("EmployeeID");

                entity.Property(e => e.LeaveEnd)
                    .HasColumnType("date")
                    .HasColumnName("Leave_End");

                entity.Property(e => e.LeaveStart)
                    .HasColumnType("date")
                    .HasColumnName("Leave_Start");

                entity.Property(e => e.LeaveStatus)
                    .HasColumnName("Leave_status")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.LeaveType)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("Leave_type");

                entity.Property(e => e.ManagerId).HasColumnName("ManagerID");

                entity.Property(e => e.Reason)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Leave6>(entity =>
            {
                entity.HasKey(e => e.Lid)
                    .HasName("PK__leave6__C6555721FA196A93");

                entity.ToTable("leave6");

                entity.Property(e => e.Lid).HasColumnName("LID");

                entity.Property(e => e.EmployeeId).HasColumnName("EmployeeID");

                entity.Property(e => e.LeaveEnd)
                    .HasColumnType("date")
                    .HasColumnName("Leave_End");

                entity.Property(e => e.LeaveStart)
                    .HasColumnType("date")
                    .HasColumnName("Leave_Start");

                entity.Property(e => e.LeaveStatus)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("Leave_status");

                entity.Property(e => e.LeaveType)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("Leave_type");

                entity.Property(e => e.ManagerId).HasColumnName("ManagerID");

                entity.Property(e => e.Reason)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Leavelm>(entity =>
            {
                entity.HasKey(e => e.Lid)
                    .HasName("PK__leavelms__C6555721C926FD08");

                entity.ToTable("leavelms");

                entity.Property(e => e.Lid).HasColumnName("LID");

                entity.Property(e => e.EmployeeId).HasColumnName("EmployeeID");

                entity.Property(e => e.LeaveEnd)
                    .HasColumnType("date")
                    .HasColumnName("Leave_End");

                entity.Property(e => e.LeaveStart)
                    .HasColumnType("date")
                    .HasColumnName("Leave_Start");

                entity.Property(e => e.LeaveStatus)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("Leave_status");

                entity.Property(e => e.LeaveType)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("Leave_type");

                entity.Property(e => e.ManagerId).HasColumnName("ManagerID");

                entity.Property(e => e.Reason)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.Employee)
                    .WithMany(p => p.Leavelms)
                    .HasForeignKey(d => d.EmployeeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_EmployeeID");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
