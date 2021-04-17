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
		tags= {"@TC4,@TC1,@TC2,@TC3,@TC5,@TC6,@TC7,@TC8,@TC10,@TC11,@TC12,@TC9"},
		plugin= {"pretty","html:test-output/Rohini_Report"}
		)

public class TestRunner {

}
