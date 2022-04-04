function createSecretHolder(secret) { 
  return { getSecret: function() 
          { return secret; }, 
          setSecret: function(l) 
          { secret = l; } }; }