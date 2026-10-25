import test from 'node:test';
import assert from 'node:assert/strict';
import {seed,offers} from '../src/data.js';
test('unknown and incomplete evidence never enters the ranked shortlist',()=>{for(const row of seed){assert.equal(row.synthetic,true);if(row.months<12||row.age===null||['Unknown','Incomplete','Withheld'].includes(row.occupancy))assert.equal(row.rank,null,`${row.name} must be withheld`);}assert.equal(seed.find(r=>r.id===103).months,9);assert.equal(seed.find(r=>r.id===103).score,null);});
test('correction retains the rejected age-led recommendation',()=>{const r=seed.find(r=>r.id===107);assert.equal(r.age,3);assert.equal(r.state,'Rejected');assert.match(r.reason,/24 to 3/);});
test('five distinct quote hypotheses preserve their units',()=>{assert.deepEqual(offers.map(o=>[o.price,o.unit]),[['$2,000','/ 20 buildings'],['$120','/ building'],['$750','/ building'],['$400','/ project'],['$600','/ month / portfolio']]);assert.equal(new Set(seed.map(r=>r.id)).size,10);});
