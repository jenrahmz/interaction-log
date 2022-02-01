const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

//branching for assesment scren outgoing contact
router.post('/version-0-3d/contact-claimant', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    const action = req.session.data['action']
  
    if (action == 'Booked an assessment') {
        res.redirect('/version-0-3d/assessment-booking')
      } 
      else if (action == 'Rescheduled an assessment') {
        res.redirect('/version-0-3d/assessment-booking')
      }
      else {
        res.redirect('/version-0-3d/outgoing-channel')
      }
    })

    router.post('/version-0-3d/contact-claimant-incoming', function (req, res) {
      // Get the answer from session data
      // The name between the quotes is the same as the 'name' attribute on the input elements
      // However in JavaScript we can't use hyphens in variable names
    
      const action = req.session.data['action']
    
      if (action == 'Rescheduled an assessment') {
          res.redirect('/version-0-3d/assessment-booking-incoming')
        }
        else {
          res.redirect('/version-0-3d/incoming-channel')
        }
      })

      router.post('/version-0-3d/event-contact', function (req, res) {
        // Get the answer from session data
        // The name between the quotes is the same as the 'name' attribute on the input elements
        // However in JavaScript we can't use hyphens in variable names
      
        const action = req.session.data['action']
      
        if (action == 'Paper based review booked') {
            res.redirect('/version-0-3d/pbr-assessment-booking')
          }
          else {
            res.redirect('/version-0-3d/event-date')
          }
        })



        router.post('/version-0-3d/what-contact-type', function (req, res) {
          // Get the answer from session data
          // The name between the quotes is the same as the 'name' attribute on the input elements
          // However in JavaScript we can't use hyphens in variable names
        
          const what = req.session.data['what']
        
          if (what == 'outgoing') {
              res.redirect('/version-0-3d/who-outgoing')
            } 
            else if (what == 'incoming') {
              res.redirect('/version-0-3d/who-incoming')
            }
            else {
              res.redirect('/version-0-3d/event')
            }
          })
    

    router.post('/version-0-3-1/contact-claimant', function (req, res) {
      // Get the answer from session data
      // The name between the quotes is the same as the 'name' attribute on the input elements
      // However in JavaScript we can't use hyphens in variable names
    
      const action = req.session.data['action']
    
      if (action == 'Booked an assessment') {
          res.redirect('/version-0-3-1/assessment-booking')
        } 
        else if (action == 'Rescheduled an assessment') {
          res.redirect('/version-0-3-1/assessment-booking')
        }
        else {
          res.redirect('/version-0-3-1/index')
        }
      })

      router.post('/version-0-3-1/contact-claimant-incoming', function (req, res) {
        // Get the answer from session data
        // The name between the quotes is the same as the 'name' attribute on the input elements
        // However in JavaScript we can't use hyphens in variable names
      
        const action = req.session.data['action']
      
        if (action == 'Rescheduled an assessment') {
            res.redirect('/version-0-3-1/assessment-booking-incoming')
          }
          else {
            res.redirect('/version-0-3-1/index')
          }
        })
  


      router.post('/version-0-3-1/log-condensed', function (req, res) {
        // Get the answer from session data
        // The name between the quotes is the same as the 'name' attribute on the input elements
        // However in JavaScript we can't use hyphens in variable names
      
        const claimant = req.session.data['claimant']
      
        if (claimant == 'outgoing') {
            res.redirect('/version-0-3-1/outgoing')
          } 
          else if (claimant == 'incoming') {
            res.redirect('/version-0-3-1/incoming')
          }
          else {
            res.redirect('/version-0-3-1/event')
          }
        })


        router.post('/version-0-3-1/edit-page', function (req, res) {
          // Get the answer from session data
          // The name between the quotes is the same as the 'name' attribute on the input elements
          // However in JavaScript we can't use hyphens in variable names
        
          const entry = req.session.data['entry']
        
          if (entry == 'edit') {
              res.redirect('/version-0-3-1/referral')
            } 
           
            else {
              res.redirect('/version-0-3-1/index')
            }
          })
  
