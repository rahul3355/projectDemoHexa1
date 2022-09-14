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
    public class EmployeelmsController : ControllerBase
    {
        private readonly projectDemoContext _context;

        public EmployeelmsController(projectDemoContext context)
        {
            _context = context;
        }

        // GET: api/Employeelms
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employeelm>>> GetEmployeelms()
        {
            return await _context.Employeelms.ToListAsync();
        }

        // GET: api/Employeelms/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Employeelm>> GetEmployeelm(int id)
        {
            var employeelm = await _context.Employeelms.FindAsync(id);

            if (employeelm == null)
            {
                return NotFound();
            }

            return employeelm;
        }

        // PUT: api/Employeelms/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployeelm(int id, Employeelm employeelm)
        {
            if (id != employeelm.EmployeeId)
            {
                return BadRequest();
            }

            _context.Entry(employeelm).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeelmExists(id))
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

        // POST: api/Employeelms
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Employeelm>> PostEmployeelm(Employeelm employeelm)
        {
            _context.Employeelms.Add(employeelm);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (EmployeelmExists(employeelm.EmployeeId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetEmployeelm", new { id = employeelm.EmployeeId }, employeelm);
        }

        // DELETE: api/Employeelms/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployeelm(int id)
        {
            var employeelm = await _context.Employeelms.FindAsync(id);
            if (employeelm == null)
            {
                return NotFound();
            }

            _context.Employeelms.Remove(employeelm);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EmployeelmExists(int id)
        {
            return _context.Employeelms.Any(e => e.EmployeeId == id);
        }
    }
}
