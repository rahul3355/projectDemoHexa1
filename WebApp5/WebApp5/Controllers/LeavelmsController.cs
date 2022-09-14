using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApp5.Models;

namespace WebApp5.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeavelmsController : ControllerBase
    {
        private readonly projectDemoContext _context;

        public LeavelmsController(projectDemoContext context)
        {
            _context = context;
        }

        // GET: api/Leavelms
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Leavelm>>> GetLeavelms()
        {
            return await _context.Leavelms.ToListAsync();
        }

        // GET: api/Leavelms/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Leavelm>> GetLeavelm(int id)
        {
            var leavelm = await _context.Leavelms.FindAsync(id);

            if (leavelm == null)
            {
                return NotFound();
            }

            return leavelm;
        }

        [HttpGet("managerid/{id}")]
        public async Task<ActionResult<IEnumerable<Leavelm>>> GetEmployeesByMan(int id)
        {
            return await _context.Leavelms.Where(x => x.ManagerId == id).ToListAsync();
        }


        [HttpGet("managerid/{id}/leaveStatus/")]
        public async Task<ActionResult<IEnumerable<Leavelm>>> GetEmployeesByPendingMan(int id, string status)
        {
            return await _context.Leavelms.Where(x => x.ManagerId == id && x.LeaveStatus==status).ToListAsync();
        }

        [HttpGet("leaveStatus/{leaveStatus}")]
        public async Task<ActionResult<IEnumerable<Leavelm>>> GetEmployeesByMan(string leaveStatus)
        {
            return await _context.Leavelms.Where(x => x.LeaveStatus == leaveStatus).ToListAsync();
        }

        // PUT: api/Leavelms/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLeavelm(int id, Leavelm leavelm)
        {
            if (id != leavelm.Lid)
            {
                return BadRequest();
            }

            _context.Entry(leavelm).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LeavelmExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        //[HttpPut("{id, leaveStatus}")]
        //public async Task<IActionResult> PutLeaveStatus(int id, string leaveStatus, Leavelm leavelm)
        //{
        //    if (id != leavelm.Lid)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(leavelm).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!LeavelmExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        [Route("UpdateLeave")]
        [HttpPut]
        public object UpdateLeave(Leavelm lm)
        {
            string status = "";
            string message = "";
            try
            {
                var obj = _context.Leavelms.Where(x => x.Lid == lm.Lid).ToList().FirstOrDefault();
                if (obj.Lid > 0)
                {
                    obj.LeaveStatus = lm.LeaveStatus;
                    _context.SaveChanges();
                    status = "success";
                    message = "Leave updated";

                }

            }
            catch (Exception ex)
            {
                status = "Failed";
                message = "Leave Update failed";
            }

            return status;

        }

        // POST: api/Leavelms
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Leavelm>> PostLeavelm(Leavelm leavelm)
        {
            _context.Leavelms.Add(leavelm);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLeavelm", new { id = leavelm.Lid }, leavelm);
        }

        // DELETE: api/Leavelms/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLeavelm(int id)
        {
            var leavelm = await _context.Leavelms.FindAsync(id);
            if (leavelm == null)
            {
                return NotFound();
            }

            _context.Leavelms.Remove(leavelm);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LeavelmExists(int id)
        {
            return _context.Leavelms.Any(e => e.Lid == id);
        }
    }
}
