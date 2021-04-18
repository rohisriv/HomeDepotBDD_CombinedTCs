package testRun;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features=".//Features//",
		glue="stepDefinition",
		monochrome=true,
		dryRun=false,
		tags= {"@TC5,@TC4,@TC2,@TC6,@TC9"},
		plugin= {"pretty","html:test-output/Rohini_Report","json:target/cucumber.json"}
		)

public class TestRunner {

}
