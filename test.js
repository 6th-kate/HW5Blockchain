const {
    expectEvent,
    BN
} = require('openzeppelin-test-helpers');
  
const chai = require('chai');
chai.use(require('chai-as-promised'));
chai.should();
  
const RockPaperScissorsFactory = artifacts.require('RockPaperScissors');
const AccessFactory = artifacts.require('AccessRockPaperScissors');
  
contract('AccessRockPaperScissors', accounts => {
    const [owner, ...others] = accounts;
  
    describe('#constructor()', () => {
      it('should successfully initialize', async () => {
        const AccessRockPaperScissors = await AccessFactory.new();
      });
    });
  
    describe('#addValuesWithCall()', () => {
        let RockPaperScissors;
        beforeEach(async () => {
            RockPaperScissors = await RockPaperScissorsFactory.new();
        });
        
        it('should successfully add values with call', async () => {
            const result = await AccessRockPaperScissors.addValuesWithCall(RockPaperScissors.address, new BN('10'));
            
            expectEvent.inLogs(result.logs, 'AddedValuesByCall', {
                bet: new BN('10'),
                success: true,
            });
            
            (result.receipt.from).should.be.equal(owner.toString().toLowerCase());
            (result.receipt.to).should.be.equal(AccessRockPaperScissors.address.toString().toLowerCase());
            
            (await RockPaperScissors.firstPlayerBet()).should.be.bignumber.equal(new BN('10'));
            (await AccessRockPaperScissors.firstPlayerBet()).should.be.bignumber.equal(new BN('10'));
        });
    });
});