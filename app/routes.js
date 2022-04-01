const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

//branching for assesment scren outgoing contact
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
        res.redirect('/version-0-3-1/outgoing-channel')
      }
    })

    router.post('/version-0-3-1/contact-claimant-incoming', function (req, res) {
      // Get the answer from session data
      // The name between the quotes is the same as the 'name' attribute on the input elements
      // However in JavaScript we can't use hyphens in variable names
    
      const incaction = req.session.data['inc-action']
    
      if (incaction == 'Rescheduled an assessment') {
          res.redirect('/version-0-3-1/assessment-booking-incoming')
        }
        else {
          res.redirect('/version-0-3-1/incoming-channel')
        }
      })

      router.post('/version-0-3-1/event-contact', function (req, res) {
        // Get the answer from session data
        // The name between the quotes is the same as the 'name' attribute on the input elements
        // However in JavaScript we can't use hyphens in variable names
      
        const action = req.session.data['action']
      
        if (action == 'Paper based review booked') {
            res.redirect('/version-0-3-1/pbr-assessment-booking')
          }
          else {
            res.redirect('/version-0-3-1/event-date')
          }
        })


        router.post('/version-0-3-2/event-contact', function (req, res) {
        // Get the answer from session data
        // The name between the quotes is the same as the 'name' attribute on the input elements
        // However in JavaScript we can't use hyphens in variable names
      
        const action = req.session.data['action']
      
        if (action == 'Paper based review booked') {
            res.redirect('/version-0-3-2/pbr-assessment-booking')
          }
          else {
            res.redirect('/version-0-3-2/index')
          }
        })



        router.post('/version-0-3-1/what-contact-type', function (req, res) {
          // Get the answer from session data
          // The name between the quotes is the same as the 'name' attribute on the input elements
          // However in JavaScript we can't use hyphens in variable names
        
          const what = req.session.data['what']
        
          if (what == 'outgoing') {
              res.redirect('/version-0-3-1/who-outgoing')
            } 
            else if (what == 'incoming') {
              res.redirect('/version-0-3-1/who-incoming')
            }
            else {
              res.redirect('/version-0-3-1/event')
            }
          })

          router.post('/version-0-3-1/telephone-check', function (req, res) {
            // Get the answer from session data
            // The name between the quotes is the same as the 'name' attribute on the input elements
            // However in JavaScript we can't use hyphens in variable names
          
            const contact = req.session.data['contact-method']
          
            if (contact == 'Telephone call to ') {
                res.redirect('/version-0-3-1/phone-answer')
              } 
              
              else {
                res.redirect('/version-0-3-1/outgoing-date')
              }
            })


            router.post('/version-0-3-2/telephone-check', function (req, res) {
              // Get the answer from session data
              // The name between the quotes is the same as the 'name' attribute on the input elements
              // However in JavaScript we can't use hyphens in variable names
            
              const contact = req.session.data['contact-method']
            
              if (contact == 'Telephone call to ') {
                  res.redirect('/version-0-3-2/phone-answer')
                } 
                
                else {
                  res.redirect('/version-0-3-2/index')
                }
              })

              router.post('/version-0-3-3/telephone-check', function (req, res) {
                // Get the answer from session data
                // The name between the quotes is the same as the 'name' attribute on the input elements
                // However in JavaScript we can't use hyphens in variable names
              
                const contact = req.session.data['contact-method']
              
                if (contact == 'Telephone call to ') {
                    res.redirect('/version-0-3-3/phone-answer')
                  } 
                  
                  else {
                    res.redirect('/version-0-3-3/index')
                  }
                })

            router.post('/version-0-3-1/telephone-check-assessment-booking', function (req, res) {
              // Get the answer from session data
              // The name between the quotes is the same as the 'name' attribute on the input elements
              // However in JavaScript we can't use hyphens in variable names
            
              const answer = req.session.data['phone-answer']
            
              if (answer == 'yes-assessment') {
                  res.redirect('/version-0-3-1/assessment-booking')
                } 
                else if (answer == 'yes-other') {
                  res.redirect('/version-0-3-1/index')
                }
                else {
                  res.redirect('/version-0-3-1/index')
                }
              })


              router.post('/version-0-3-2/telephone-check-assessment-booking', function (req, res) {
                // Get the answer from session data
                // The name between the quotes is the same as the 'name' attribute on the input elements
                // However in JavaScript we can't use hyphens in variable names
              
                const answer = req.session.data['phone-answer']
              
                if (answer == 'yes-assessment') {
                    res.redirect('/version-0-3-2/assessment-booking')
                  } 
                  else if (answer == 'yes-other') {
                    res.redirect('/version-0-3-2/index')
                  }
                  else {
                    res.redirect('/version-0-3-2/index')
                  }
                })
    

                router.post('/version-0-3-3/telephone-check-assessment-booking', function (req, res) {
                  // Get the answer from session data
                  // The name between the quotes is the same as the 'name' attribute on the input elements
                  // However in JavaScript we can't use hyphens in variable names
                
                  const answer = req.session.data['phone-answer']
                
                  if (answer == 'yes-assessment') {
                      res.redirect('/version-0-3-3/assessment-booking')
                    } 
                    else if (answer == 'yes-other') {
                      res.redirect('/version-0-3-3/index')
                    }
                    else {
                      res.redirect('/version-0-3-3/index')
                    }
                  })
      

    router.post('/version-0-3-2/contact-claimant', function (req, res) {
      // Get the answer from session data
      // The name between the quotes is the same as the 'name' attribute on the input elements
      // However in JavaScript we can't use hyphens in variable names
    
      const action = req.session.data['action']
    
      if (action == 'Booked an assessment') {
          res.redirect('/version-0-3-2/assessment-booking')
        } 
        else if (action == 'Rescheduled an assessment') {
          res.redirect('/version-0-3-2/assessment-booking')
        }
        else {
          res.redirect('/version-0-3-2/index')
        }
      })

      router.post('/version-0-3-3/contact-claimant', function (req, res) {
        // Get the answer from session data
        // The name between the quotes is the same as the 'name' attribute on the input elements
        // However in JavaScript we can't use hyphens in variable names
      
        const action = req.session.data['action']
      
        if (action == 'Booked an assessment') {
            res.redirect('/version-0-3-3/assessment-booking')
          } 
          else if (action == 'Rescheduled an assessment') {
            res.redirect('/version-0-3-3/assessment-booking')
          }
          else {
            res.redirect('/version-0-3-3/index')
          }
        })

      router.post('/version-0-3-2/contact-claimant-incoming', function (req, res) {
        // Get the answer from session data
        // The name between the quotes is the same as the 'name' attribute on the input elements
        // However in JavaScript we can't use hyphens in variable names
      
        const inaction = req.session.data['inc-action']
      
        if (inaction == 'Rescheduled an assessment') {
            res.redirect('/version-0-3-2/assessment-booking-incoming')
          }
          else {
            res.redirect('/version-0-3-2/index')
          }
        })

        router.post('/version-0-3-3/contact-claimant-incoming', function (req, res) {
          // Get the answer from session data
          // The name between the quotes is the same as the 'name' attribute on the input elements
          // However in JavaScript we can't use hyphens in variable names
        
          const inaction = req.session.data['inc-action']
        
          if (inaction == 'Rescheduled an assessment') {
              res.redirect('/version-0-3-3/assessment-booking-incoming')
            }
            else {
              res.redirect('/version-0-3-3/index')
            }
          })
  


      router.post('/version-0-3-2/log-condensed', function (req, res) {
        // Get the answer from session data
        // The name between the quotes is the same as the 'name' attribute on the input elements
        // However in JavaScript we can't use hyphens in variable names
      
        const what = req.session.data['what']
      
        if (what == 'outgoing') {
            res.redirect('/version-0-3-2/outgoing')
          } 
          else if (what == 'incoming') {
            res.redirect('/version-0-3-2/incoming')
          }
          else {
            res.redirect('/version-0-3-2/event')
          }
        })

        router.post('/version-0-3-3/log-condensed', function (req, res) {
          // Get the answer from session data
          // The name between the quotes is the same as the 'name' attribute on the input elements
          // However in JavaScript we can't use hyphens in variable names
        
          const what = req.session.data['what']
        
          if (what == 'outgoing') {
              res.redirect('/version-0-3-3/outgoing')
            } 
            else if (what == 'incoming') {
              res.redirect('/version-0-3-3/incoming')
            }
            else {
              res.redirect('/version-0-3-3/event')
            }
          })

          router.post('/version-0-3-4/log-condensed', function (req, res) {
            // Get the answer from session data
            // The name between the quotes is the same as the 'name' attribute on the input elements
            // However in JavaScript we can't use hyphens in variable names
          
            const what = req.session.data['what']
          
            if (what == 'outgoing') {
                res.redirect('/version-0-3-4/outgoing')
              } 
              else if (what == 'incoming') {
                res.redirect('/version-0-3-4/incoming')
              }
              else {
                res.redirect('/version-0-3-4/event')
              }
            })

            router.post('/version-0-3-4/user-contact', function (req, res) {
              // Get the answer from session data
              // The name between the quotes is the same as the 'name' attribute on the input elements
              // However in JavaScript we can't use hyphens in variable names
            
              const usercontact = req.session.data['user-contact']
            
              if (usercontact == 'yes') {
                  res.redirect('/version-0-3-4/outgoing')
                } 
               
                else {
                  res.redirect('/version-0-3-4/index')
                }
              })


        router.post('/version-0-3-2/edit-page', function (req, res) {
          // Get the answer from session data
          // The name between the quotes is the same as the 'name' attribute on the input elements
          // However in JavaScript we can't use hyphens in variable names
        
          const entry = req.session.data['entry']
        
          if (entry == 'edit') {
              res.redirect('/version-0-3-2/referral')
            } 
           
            else {
              res.redirect('/version-0-3-2/index')
            }
          })
  
